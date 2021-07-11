import type { AppProps /*, AppContext */ } from "next/app";
import React from "react";
import "../styles/custom.scss";
import "../styles/base.min.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
