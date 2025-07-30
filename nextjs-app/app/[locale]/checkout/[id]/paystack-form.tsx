'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface Props {
  email: string;
  orderId: string;
  priceInCents: number;
  currency: string;
}

type PaystackResponse = {
  reference: string;
};

type PaystackSetupOptions = {
  key: string;
  email: string;
  amount: number;
  currency: string;
  metadata: {
    orderId: string;
    callback_url?: string; // Optional: this is only used by Paystack's own redirect mode
  };
  callback: (response: PaystackResponse) => void;
  onClose: () => void;
};

interface PaystackWindow extends Window {
  PaystackPop: {
    setup: (options: PaystackSetupOptions) => {
      openIframe: () => void;
    };
  };
}

export default function PaystackForm({
  email,
  orderId,
  priceInCents,
  currency,
}: Props) {
  const [isLoading, setIsLoading] = useState(false);

  const handlePaystack = () => {
    setIsLoading(true);

    const handler = (window as unknown as PaystackWindow).PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
      email,
      amount: priceInCents,
      currency,
      metadata: {
        orderId,
        // Optional: this is only used by Paystack's own redirect mode
        callback_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/${orderId}/paystack-payment-success`,
      },
      callback: function (response: PaystackResponse) {
        console.log('✅ Paystack callback fired. Reference:', response.reference);

        // ✅ Manually redirect the user to the success page (required for inline)
        // IMPORTANT:  Encode the reference to handle special characters in the URL
        window.location.href = `/checkout/${orderId}/paystack-payment-success?reference=${encodeURIComponent(response.reference)}`;
      },
      onClose: function () {
        setIsLoading(false);
      },
    });

    handler.openIframe();
  };

  return (
    <div className="space-y-4">
      <div className="text-xl">Paystack Checkout</div>
      <Button className="w-full" onClick={handlePaystack} disabled={isLoading}>
        {isLoading ? 'Processing...' : (
          <div>
            Pay - {(priceInCents / 100).toLocaleString()} {currency}
          </div>
        )}
      </Button>
    </div>
  );
}