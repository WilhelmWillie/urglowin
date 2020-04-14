import React, { useEffect, useContext  } from 'react';

import fetch from "isomorphic-unfetch";

import { NavBar, MetaTags, HeaderSection, ProductSection, SearchFilter, SearchBox, Footer } from "../components";
import { SearchStore } from "../stores";

const Home = ({ products, categories, query}) => {
  const searchState = useContext(SearchStore);
  const { dispatch } = searchState;

  useEffect(() => {
    dispatch({ type: 'UPDATE_CATEGORY', category: query.category });
  }, [query]);

  return (
    <>
      <MetaTags />
      <NavBar />
      <SearchBox />
      <HeaderSection />
      <SearchFilter categories={categories} />
      <ProductSection products={products} />
      <Footer />
    </>
  )
};

Home.getInitialProps = async ({req, query}) => {
  const host = process.env.URL || 'http://localhost:3000';

  const productsUrl = req ? `${host}/api/products` : '/api/products';
  const productsRes = await fetch(productsUrl);
  const productsData = await productsRes.json();

  const categoriesUrl = req ? `${host}/api/products/categories` : '/api/products/categories';
  const categoriesRes = await fetch(categoriesUrl);
  const categoriesData = await categoriesRes.json();

  return { products: productsData.products, categories: categoriesData.categories, query }
}

export default Home;
