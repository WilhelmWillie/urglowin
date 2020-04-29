import { useContext } from "react";
import styled from "styled-components";
import Link from "next/link";

import { Container, Row, Column } from "./style";
import Button from "./Button";
import { AppStore } from "../stores";

const LeftColumn = ({ user }) => {
  const appState = useContext(AppStore);
  const { dispatch } = appState;

  const handleEditButton = () => {
    dispatch({ type: 'TOGGLE_EDIT_PROFILE_MODAL' });
  }

  return (
    <Column width="200px">
      <ProfilePic src={user.profilePic} />

      <EditButton onClick={handleEditButton}>Edit Profile</EditButton>

      <Link href="/auth/logout" passHref>
        <Button as="a" outline>Logout</Button>
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

  const HOST = process.env.NODE_ENV === 'production' ? 'https://mvp.urglow.in' : 'http://localhost:3000';

  return (
    <ColumnWithLeftPadding>
      <h1>{user.firstName} {user.lastName}</h1>

      <h2>About</h2>

      <ProfileDetail>Hi, I'm <span>{user.username || 'N/A'}</span></ProfileDetail>

      <ProfileDetail>My skin is <span>{user.bio?.skinDescription || 'N/A'}</span></ProfileDetail>

      <ProfileDetail>My favorite product right now is <span>{user.bio?.favProduct || 'N/A'}</span></ProfileDetail>

      <ProfileDetail>The ingredient that I like the most in my products is <span>{user.bio?.favIngredient || 'N/A'}</span></ProfileDetail>
      <br />

      {user.username && (
        <Share>
          <p>Share your profile with others using this link</p>

          <input type="text" value={`${HOST}/profile/${user.username}`} onClick={
            (e) => {
              e.currentTarget.select();
            }
          } />
        </Share>
      )}

      <h2>Saved</h2>

      <SavedProducts>
        {
          user.saved.length > 0 ? (
            Products
          ) : (
            <>
              <span/>
              <SavedProductsEmptyMessage>You have no saved products :(</SavedProductsEmptyMessage>
              <span/>
            </>
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
    margin: 12px 0;
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

const ProfileDetail = styled.p`
  margin-bottom: 8px;

  span {
    background: #3298F9;
    border: none;
    color: #FFFFFF;
    padding: 4px;
    font-size: 18px;
  }
`;

const EditButton = styled(Button)`
  margin-bottom: 16px;
  cursor: pointer;
`;

const Share = styled.div`
  border-radius: 8px;
  border: 2px solid #EDEDED;
  padding: 20px;
  margin-bottom: 16px;

  p {
    margin-bottom: 8px;
  }

  input[type=text] {
    border: 1px solid #B1D9FF;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 16px;
    font-size: 16px;
    font-family: MabryPro;
    width: 100%;
    color: #555555;

    ::placeholder {
      color: #888888;
    }
  }
`;

export default ProfileColumns;