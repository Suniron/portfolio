import React from "react";
import NextDocument, { DocumentContext } from "next/document";
import Head from "next/head";
import { css } from "../stitches.config";

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;

    try {
      let extractedStyles;
      ctx.renderPage = () => {
        const { styles, result } = css.getStyles(originalRenderPage);
        extractedStyles = styles;
        return result;
      };

      const initialProps = await NextDocument.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
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
            {initialProps.styles}

            {extractedStyles.map((content, index) => (
              <style
                key={index}
                dangerouslySetInnerHTML={{ __html: content }}
              />
            ))}
          </>
        ),
      };
    } finally {
    }
  }
}
