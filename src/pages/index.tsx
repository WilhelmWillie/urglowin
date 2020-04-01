import styled from "styled-components";
import Head from "next/head";

import Logo from "../assets/logo.svg";

const Home = () => {
  return (
    <>
      <Head>
        <title>URGLOWIN - Work In Progress</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={
            "We're getting ready to help you navigate the wide world of skincare and what works for you."
          }
        ></meta>

        <meta property="og:url" content="https://mvp.urglow.in" />
        <meta property="og:title" content={"URGLOWIN - Hey, you're glowing!"} />
        <meta
          property="og:description"
          content={
            "We're getting ready to help you navigate the wide world of skincare and what works for you."
          }
        />

        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-125571056-4"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-125571056-4');
          `
          }}
        />

        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <LogoImg src={Logo} />

      <Header>Hello World.</Header>
      <Subheader>Luv you Jenny ❤️</Subheader>
    </>
  )
};

const LogoImg = styled.img`
  max-width: 300px;
  width: 100%;
  display: block;
  margin: 32px auto 48px;
`;

const Header = styled.h1`
  text-align: center;
`;

const Subheader = styled.h2`
  text-align: center;
  margin-top: 32px;
  font-size: 24px;
`;

export default Home;
