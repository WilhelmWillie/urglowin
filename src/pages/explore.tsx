import React, { useEffect, useContext  } from 'react';

import fetch from "isomorphic-unfetch";

import { NavBar, MetaTags, HeaderSection, ProductSection, SearchFilter, SearchBox, Footer, LoginModal } from "../components";
import { SearchStore } from "../stores";

import useUpdateUser from "../hooks/useUpdateUser";
import getUser from "../utils/getUser";

const Explore = ({ products, categories, query, user}) => {
  const searchState = useContext(SearchStore);
  const { dispatch } = searchState;

  useEffect(() => {
    dispatch({ type: 'UPDATE_CATEGORY', category: query.category });
  }, [query]);

  useUpdateUser(user);

  return (
    <>
      <MetaTags 
        title="URGLOWIN - Explore"
        description="Explore featured skincare products on URGLOWIN. Learn about products that will work best for your skin type and preferences"
      />
      <NavBar />
      {/*<SearchBox />*/}
      <HeaderSection />
      <SearchFilter categories={categories} />
      <ProductSection products={products} />
      <Footer />
      <LoginModal />
    </>
  )
};

Explore.getInitialProps = async ({req, query}) => {
  const host = process.env.URL || 'http://localhost:3000';

  const productsUrl = req ? `${host}/api/products` : '/api/products';
  const productsRes = await fetch(productsUrl);
  const productsData = await productsRes.json();

  const categoriesUrl = req ? `${host}/api/products/categories` : '/api/products/categories';
  const categoriesRes = await fetch(categoriesUrl);
  const categoriesData = await categoriesRes.json();

  const user = await getUser(req);

  return { products: productsData.products, categories: categoriesData.categories, query, user }
}

export default Explore;
