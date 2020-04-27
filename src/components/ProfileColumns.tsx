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
    <div>
      <p>{product.productName}</p>
    </div>
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
  min-height: 300px;
  display: flex;
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
`;

export default ProfileColumns;