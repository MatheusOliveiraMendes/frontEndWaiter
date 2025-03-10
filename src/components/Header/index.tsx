import logo from '../../assets/images/logo.svg';

import { Container } from './styles';
import { Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <div className="page-details">
          <h1>Orders</h1>
          <h2>Track customer orders</h2>
        </div>

        <img src={logo} alt="WAITERAPP" />
      </Content>
    </Container>
  );
}
