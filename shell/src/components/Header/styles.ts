import styled from 'styled-components';

export const MainContainer = styled.header`
  justify-content: space-between;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  background-color: #00848e;
  padding: 1rem;
  color: #fff;
`;

export const List = styled.ul`
  list-style-type: none;
  li {
    display: inline;
    margin-left: 0.8rem;
  }
  a {
    text-decoration: none;
  }
`;
