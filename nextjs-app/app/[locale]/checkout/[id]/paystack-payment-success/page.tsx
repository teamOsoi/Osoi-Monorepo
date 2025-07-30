import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';

interface PageParams {
  locale: string;
  id: string;
}

interface PageProps {
  params: Promise<PageParams>;
  searchParams: Promise<{ reference?: string }>;
}

interface Order {
  _id: string;
  isPaid: boolean;
  // add more fields as needed
}

interface PaystackVerifyResult {
  isSuccess?: boolean;
  order?: Order;
  error?: string;
  details?: unknown; // <-- FIXED: was any
  message?: string;
}

// Helper: Friendly error mapping
function getFriendlyErrorMessage(raw?: string): string {
  if (!raw) return "Payment verification failed. Please try again or contact support.";
  if (raw.includes("No reference")) {
    return "We couldn't find your payment reference. Please try the payment again.";
  }
  if (raw.includes("Paystack verification API failed")) {
    return "There was a problem verifying your payment. Please try again. If this continues, contact support.";
  }
  if (raw.includes("Verification failed")) {
    return "Your payment was not successful. Please try again or use a different card.";
  }
  if (raw.includes("Order not found")) {
    return "We couldn't find the order linked to this payment. Please contact support with your payment details.";
  }
  if (raw.includes("Failed to mark order as paid")) {
    return "Something went wrong on our end during payment processing. Please try again in a few minutes.";
  }
  return "Payment verification failed. Please try again or contact support.";
}

const PaystackSuccessPage = async (props: PageProps) => {
  const params = await props.params;
  const searchParams = await props.searchParams;

  const { id, locale } = params;
  const reference = searchParams.reference;

  if (!reference) {
    return redirect(
      `/${locale}/checkout/${id}?error=${encodeURIComponent("No payment reference provided.")}`
    );
  }

  const maxRetries = 3;
  let data: PaystackVerifyResult | null = null;
  let error: string | null = null;
  let isSuccess = false;

  for (let retryCount = 0; retryCount < maxRetries; retryCount++) {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/verify-paystack-payment?reference=${reference}`,
        { cache: 'no-store' }
      );
      const contentType = res.headers.get("content-type") || "";
      if (!contentType.includes("application/json")) {
        throw new Error("Non-JSON API response.");
      }

      data = await res.json();

      isSuccess = Boolean(
        data &&
        data.isSuccess === true &&
        data.order &&
        typeof data.order._id === 'string' &&
        data.order._id === id &&
        data.order.isPaid === true
      );

      if (isSuccess) break;
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (e) {
      if (e instanceof Error) {
        error = e.message;
      } else {
        error = "Unknown error";
      }
      break;
    }
  }

  if (isSuccess) {
    return (
      <div className='max-w-4xl w-full mx-auto space-y-8'>
        <div className='flex flex-col gap-6 items-center'>
          <h1 className='font-bold text-2xl lg:text-3xl'>
            Thanks for your purchase
          </h1>
          <div>We are now processing your order.</div>
          <Button asChild>
            <Link href={`/account/orders/${id}`}>View order</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Get friendly error for user (from mapping)
  const friendlyError = getFriendlyErrorMessage((data?.error ?? error) ?? undefined);

  return (
    <div className='max-w-lg w-full mx-auto space-y-8 text-center mt-20'>
      <h1 className='text-2xl font-bold text-red-500'>Payment Verification Failed</h1>
      <p className='mb-4'>
        {friendlyError}
      </p>
      {/* Debug info for developer (dev mode only) */}
      {process.env.NODE_ENV === 'development' && (data?.error || data?.details || error) && (
        <div className="text-left bg-gray-100 rounded p-2 text-xs text-gray-700 overflow-x-auto max-h-40 mt-4">
          <strong>Debug info:</strong>
          <pre>{JSON.stringify({ error: data?.error, details: data?.details, rawError: error }, null, 2)}</pre>
        </div>
      )}
      <Button asChild>
        <Link href={`/${locale}/checkout/${id}`}>
          Retry Checkout
        </Link>
      </Button>
      <div className="mt-4 text-sm text-gray-500">
        If you believe this is a mistake, please{" "}
        <a href="mailto:support@lynnsclothing.com" className="underline">contact support</a>.
      </div>
    </div>
  );
};

export default PaystackSuccessPage;