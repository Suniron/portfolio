import App from "next/app";
import Head from "next/head";
import React from "react";
import { createOvermind, createOvermindSSR, rehydrate } from "overmind";
import { Provider } from "overmind-react";
import * as overmindStore from "store";
import "../styles/custom.scss";
import "../styles/base.min.scss"

export default class MyApp extends App {
  overmind = createOvermind(overmindStore.config);
  // CLIENT: On initial route
  // SERVER: On initial route
  constructor(props) {
    super(props);

    const mutations = props.pageProps.mutations || [];

    if (typeof window !== "undefined") {
      // On the client we just instantiate the Overmind instance and run
      // the "changePage" action

      this.overmind.actions.changePage(mutations);
    } else {
      // On the server we rehydrate the mutations to an SSR instance of Overmind,
      // as we do not want to run any additional logic here
      this.overmind = createOvermindSSR(overmindStore.config);
      rehydrate(this.overmind.state, mutations);
    }
  }
  // CLIENT: After initial route, on page change
  // SERVER: never
  componentDidUpdate(): void {
    // This runs whenever the client routes to a new page
    this.overmind.actions.changePage(this.props.pageProps.mutations || []);
  }
  // CLIENT: On every page change
  // SERVER: On initial route

  render(): JSX.Element {
    const { Component, pageProps } = this.props;

    return (
      <Provider value={this.overmind}>
        <Head>
          <title>Etienne BLANC - Développeur</title>

          <link rel="icon" href="favicon.ico" />
          <meta name="creator" content="Etienne BLANC" />
          <meta name="lang" content="FR" />
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Etienne BLANC - Développeur Fullstack: son CV, ses projets et ses éxpériences"
          />
          <meta name="theme-color" content="FFFFFF" />
        </Head>

        {/* <AppLayout> */}
        <Component {...pageProps} />
        {/* </AppLayout> */}
      </Provider>
    );
  }
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }
