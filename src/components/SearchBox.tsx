import React, { useContext } from "react";
import styled from "styled-components";
import Link from "next/link";

import { Container, Row, Column } from "./style";
import { SearchStore } from "../stores";

import SearchGraphic from "../assets/search.svg";

const SearchBox = () => {
  const searchState = useContext(SearchStore);
  const { state, dispatch } = searchState;

  return (
    <Wrapper>
      <Container>
        <Row>
          <SearchContainer>
            <SearchInput placeholder="Search for a product, brand, or an ingredient"/>
            <SearchButton src={SearchGraphic} />
          </SearchContainer>
        </Row>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 24px 0 24px;
`;

const SearchContainer = styled.div`
  width: 100%;
  position: relative;
`;

const SearchButton = styled.img`
  position: absolute;
  right: 10px;
  top: 50%;
  width: 30px;
  height: 30px;
  margin-top: -15px;
  cursor: pointer;
`;

const SearchInput = styled.input`
  border: 1px solid #FFAE73;
  border-radius: 6px;
  width: 100%;
  font-size: 16px;
  padding: 16px;
  font-family: "MabryPro";
  color: #888888;
  box-sizing: border-box;
`;

export default SearchBox;