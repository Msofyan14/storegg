import "@/styles/utilities.css";
import "@/styles/homepage.css";
import "@/styles/detail.css";
import "@/styles/checkout.css";
import "@/styles/complete-checkout.css";
import "@/styles/sign-in.css";
import "@/styles/sign-up.css";
import "@/styles/sign-up-photo.css";
import "@/styles/sign-up-success.css";
import "@/styles/404-not-found.css";
import "@/styles/sidebar.css";
import "@/styles/overview.css";
import "@/styles/transactions.css";
import "@/styles/transactions-detail.css";
import "@/styles/edit-profile.css";
import "@/styles/navbar-log-in.css";
// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import "bootstrap/dist/css/bootstrap.css";
import "aos/dist/aos.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Bootsraps Meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
        crossOrigin="anonymous"
      />
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}
