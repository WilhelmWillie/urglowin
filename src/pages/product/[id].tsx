import React, { useEffect, useContext  } from 'react';
import styled from "styled-components";
import fetch from "isomorphic-unfetch";

import { NavBar, MetaTags, ProductDetails, Footer } from "../../components";

const ProductPage = ({ product }) => {
  return (
    <>
      <MetaTags 
        title={`URGLOWIN - ${product.productName} from ${product.brand}`}
        description={`Learn about ${product.productName}, a ${product.category} by ${product.brand}`}
      />
      <NavBar />
      <ProductDetails product={product} />
      <Footer />
    </>
  );
};

ProductPage.getInitialProps = async ({req, query}) => {
  const host = process.env.URL || 'http://localhost:3000';
  const route = `products/${query.id}`;
  const url = req ? `${host}/api/${route}` : `/api/${route}`;

  const res = await fetch(url);
  const data = await res.json();

  return {
    product: data.product
  }
}

export default ProductPage;
