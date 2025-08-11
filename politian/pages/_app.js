import "react-toastify/dist/ReactToastify.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/animate.css'
import '../styles/flaticon.css'
import "../styles/font-awesome.min.css";
import "../styles/themify-icons.css";
import '../styles/sass/style.scss'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store/index";
import { Provider } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Our Vision for a Stronger Kenya</title>
        <meta
          name="description"
          content="Every Kenyan deserves the opportunity to live with dignity, access quality healthcare, and earn a fair living."
        />
      </Head>

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          
          {/* Vision Section */}
          <section className="wpo-about-section section-padding">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="wpo-about-content">
                    <h2>Our Vision for a Stronger Kenya</h2>
                    <p>
                      Every Kenyan deserves the opportunity to live with dignity, access quality healthcare,
                      and earn a fair living. Our campaign is built on integrity, service, and unity —
                      because we believe that a brighter future for our children begins with the choices we make today.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Page content */}
          <Component {...pageProps} />
          <ToastContainer />
        </PersistGate>
      </Provider>
    </div>
  );
}


export default MyApp
