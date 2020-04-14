import Head from "next/head";

type MetaTagsProps = {
  title?: string;
  description?: string;
}

const MetaTags = ({ title, description } : MetaTagsProps) => (
  <Head>
    <title>{title || "URGLOWIN - Hey, you're glowing!"}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta
      name="description"
      content={
        description || "We're getting ready to help you navigate the wide world of skincare and what works for you."
      }
    ></meta>

    <meta property="og:url" content="https://mvp.urglow.in" />
    <meta property="og:title" content={title || "URGLOWIN - Hey, you're glowing!"} />
    <meta
      property="og:description"
      content={
        description || "We're getting ready to help you navigate the wide world of skincare and what works for you."
      }
    />
    
    <link rel="icon" type="image/png" href="/favicon.png" />
  </Head>
)

export default MetaTags;