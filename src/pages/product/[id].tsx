import React, { useEffect, useContext  } from 'react';
import styled from "styled-components";
import fetch from "isomorphic-unfetch";

import { NavBar, MetaTags, ProductDetails, KeyIngredients, Footer, HowToUse, Order, LoginModal } from "../../components";
import useUpdateUser from "../../hooks/useUpdateUser";
import getUser from "../../utils/getUser";

const ProductPage = ({ product, user }) => {
  useUpdateUser(user);
  
  return (
    <>
      <MetaTags 
        title={`URGLOWIN - ${product.productName} from ${product.brand}`}
        description={`Learn about ${product.productName}, a ${product.category} by ${product.brand}`}
      />
      <NavBar />
      <ProductDetails product={product} user={user} />
      <KeyIngredients product={product} />
      <HowToUse product={product} />
      <Order product={product} />
      <Footer />
      <LoginModal />
    </>
  );
};

ProductPage.getInitialProps = async ({req, query}) => {
  const host = process.env.URL || 'http://localhost:3000';
  const route = `products/${query.id}`;
  const url = req ? `${host}/api/${route}` : `/api/${route}`;

  const res = await fetch(url);
  const data = await res.json();

  const user = await getUser(req);

  return {
    product: data.product,
    user
  }
}

export default ProductPage;
