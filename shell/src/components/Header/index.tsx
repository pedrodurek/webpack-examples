import { FC } from 'react';
import { MainContainer, List } from './styles';

const Header: FC = () => (
  <MainContainer>
    <h1>Header</h1>
    <nav>
      <List>
        <li>
          <a href="#">Dashboard</a>
        </li>
        <li>
          <a href="#">Profile</a>
        </li>
      </List>
    </nav>
  </MainContainer>
);

export default Header;
