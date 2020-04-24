import React, { useContext } from "react";
import styled from "styled-components";
import Link from "next/link";

import { Container, Row, Column } from "./style";
import { SearchStore } from "../stores";

const SearchFilter = ({ categories }) => {
  const searchState = useContext(SearchStore);
  const { state, dispatch } = searchState;

  let CategoryElements;
  const activeCategory = state.category || 'All';

  if (categories) {
    // Include 'All' as the first element, then spread rest of categories in
    CategoryElements = ['All', ...categories].map((category : string, index : number) => {
      return <Link href={`/explore?category=${category}`}>
        <CategoryFilterButton key={`c-${index}`} isActive={category === activeCategory}>{category}</CategoryFilterButton>
      </Link>
    })
  }

  return (
    <Wrapper>
      <StyledContainer>
        <WrapRow justify="center">
          {CategoryElements}
        </WrapRow>
      </StyledContainer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 0 0 24px;
`;

const StyledContainer = styled(Container)`
  border-top: 1px solid #EDEDED;
  padding-top: 24px;
`;

const WrapRow = styled(Row)`
  flex-wrap: wrap;
`;

const CategoryFilterButton = styled.a`
  background: transparent;
  border: none;
  padding: 12px 16px;
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: 8px;
  color: #BBBBBB;
  cursor: pointer;

  ${({isActive}) => isActive && `
    background-color: #FFAE73;
    color: #C24A1B;
  `}
`;

export default SearchFilter;