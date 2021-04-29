import { FC } from 'react';
import { Link } from 'react-router-dom';
import { MainContainer, List } from './styles';

const Header: FC = () => (
  <MainContainer>
    <h1>Header</h1>
    <nav>
      <List>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </List>
    </nav>
  </MainContainer>
);

export default Header;
