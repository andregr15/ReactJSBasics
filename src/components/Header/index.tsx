import React from 'react';

import { useRouteMatch } from 'react-router-dom';

import { Container, Nav as Link} from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const { path } = useRouteMatch();  

  return (
    <Container size={size}> 
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <div>
            <Link selected={path === "/"} to="/">
              Listagem
            </Link>
          </div>

          <div>
            <Link selected={path === "/import"} to="/import">
              Importar
            </Link>
          </div>
        </nav>
      </header>
    </Container>
  )
};

export default Header;
