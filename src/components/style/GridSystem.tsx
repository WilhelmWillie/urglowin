import styled from "styled-components";

const Container = styled.div`
  max-width: 1024px;
  width: 93.75%;
  margin-left: auto;
  margin-right: auto;
`;

type ColumnProps = {
  width?: number;
}

const Column = styled.div<ColumnProps>`
  display: flex;
  flex-direction: column;
  flex-basis: ${({ width }) => width ? width : 'auto'};

  @media screen and (max-width: 768px) {
    flex-basis: 100%;
  }
`;

type RowProps = {
  justify?: string;
  align?: string;
}

const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justify }) => justify ? justify : 'auto'};
  align-items: ${({ align }) => align ? align : 'auto'};

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export {
  Container,
  Column,
  Row,
};
