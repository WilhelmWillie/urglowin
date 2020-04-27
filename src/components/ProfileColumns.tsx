import styled from "styled-components";
import Link from "next/link";

import { Container, Row, Column } from "./style";
import Button from "./Button";

const LeftColumn = ({ user }) => {
  return (
    <Column width="200px">
      <ProfilePic src={user.profilePic} />

      <Link href="/auth/logout" passHref>
        <Button as="a">Logout</Button>
      </Link>
    </Column>
  )
}

const RightColumn = ({ user }) => {
  const Products = user.saved.map(product => (
    <Link as={`/product/${product._id}`} passHref href="/product/[id]">
      <ProductWrapper as="a">
        <ProductImg src={product.imageUrl} alt={product.productName} />
        
        <h3>{product.brand}</h3>
        <p>{product.productName}</p>
      </ProductWrapper>
    </Link>
  ));

  return (
    <ColumnWithLeftPadding>
      <h1>{user.firstName} {user.lastName}</h1>

      <p>Hello and welcome to URGLOWIN ✨This is your personal profile. Products you save are bookmarked here for you to easily access</p>

      <br />

      <p>New features are always being worked on - stay up to date with updates by following us on Instagram @ <a href="https://instagram.com/urglow.in" target="_blank">urglow.in</a></p>
    
      <h2>Saved</h2>

      <SavedProducts>
        {
          user.saved.length > 0 ? (
            Products
          ) : (
            <SavedProductsEmptyMessage>You have no saved products :(</SavedProductsEmptyMessage>
          )
        }
      </SavedProducts>
    </ColumnWithLeftPadding>
  )
}

const ProfileColumns = ({ user }) => {
  return (
    <Wrapper>
      <ModContainer>
        <Row justify="space-between">
          <LeftColumn user={user} />

          <RightColumn user={user} />
        </Row>
      </ModContainer>
    </Wrapper>
  )
}

const ModContainer = styled(Container)`
  max-width: 960px;
`;

const Wrapper = styled.div`
  padding: 48px 0;
`;

const ProfilePic = styled.img`
  border-radius: 8px;
  margin-bottom: 16px;
`;

const ColumnWithLeftPadding = styled(Column)`
  margin-left: 64px;

  h1 {
    margin-bottom: 24px;
  }

  a {
    text-decoration: none;
    color: #185B9B;
  }

  h2 {
    font-family: GintoNord;
    text-transform: uppercase;
    font-size: 24px;
    margin: 48px 0 12px;
    color: #555555;
  }
`;

const SavedProducts = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(3, 1fr);
  padding: 24px;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }

  min-height: 300px;
  background: #F6F6F6;
  border-radius: 10px;
`;

const SavedProductsEmptyMessage = styled.span`
  justify-self: center;
  align-self: center;
  text-align: center;
  color: #555555;
  font-size: 24px;
  width: 100%;
  padding: 16px;
`;

const ProductWrapper = styled.div`
  border-radius: 8px;
  border: 2px solid #EDEDED;
  padding: 16px;
  background: #FFFFFF;
  box-sizing: border-box;
  text-align: center;
  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }

  img {
    margin: 0 auto;
  }

  h3 {
    margin: 12px 0;
    color: #888888;
    font-family: GintoNord;
  }

  p {
    color: #555555;
    font-size: 18px;
  }
`;

const ProductImg = styled.img`
  display: block;
  max-height: 150px;
  max-width: 50%;
`;


export default ProfileColumns;