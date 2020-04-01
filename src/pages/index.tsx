import fetch from "isomorphic-unfetch";

import { NavBar, MetaTags, HeaderSection, ProductSection } from "../components";

const Home = (props) => {
  return (
    <>
      <MetaTags />
      <NavBar />
      <HeaderSection />
      <ProductSection products={props.products} />
    </>
  )
};

Home.getInitialProps = async ({req}) => {
  const host = process.env.URL || 'http://localhost:3000';
  const url = req ? `${host}/api/products` : '/api/products';
  const res = await fetch(url);
  const data = await res.json();

  return { products: data.products }
}

export default Home;
