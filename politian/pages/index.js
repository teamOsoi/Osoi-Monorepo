// pages/index.js

export async function getServerSideProps() {
    return {
      redirect: {
        destination: '/home3',
        permanent: false, // change to true if this will always be the default
      },
    };
  }
  
  export default function Index() {
    // This component will never be shown because of the redirect
    return null;
  }
  
