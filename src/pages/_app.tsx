import React from 'react'
import NextApp from 'next/app'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import reset from "styled-reset";

const theme = {
  primary: 'green',
}

const GlobalStyles = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: "GintoNord";
    src: url("/fonts/GintoNord-Regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "GintoNord";
    src: url("/fonts/GintoNord-Medium.woff") format("woff");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "GintoNord";
    src: url("/fonts/GintoNord-Bold.woff") format("woff");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "MabryPro";
    src: url("/fonts/MabryPro-Black.woff") format("woff");
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: "MabryPro";
    src: url("/fonts/MabryPro-Bold.woff") format("woff");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "MabryPro";
    src: url("/fonts/MabryPro-Medium.woff") format("woff");
    font-weight: 500;
    font-style: normal;
  }

  body {
    font-family: "MabryPro", sans-serif;
    font-weight: 500;
  }

  h1 {
    font-family: "GintoNord", sans-serif;
    font-weight: 500;
    font-size: 48px;
    text-transform: uppercase;
  }

  p {
    color: #555555;
    font-size: 18px;
    line-height: 120%;
    font-weight: 500;
    letter-spacing: 0.02em;
  }
`;

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    )
  }
}