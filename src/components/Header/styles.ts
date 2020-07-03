import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface ContainerProps {
  size?: 'small' | 'large';
}

interface NavProps {
  selected: boolean;
}

export const Nav = styled(Link)<NavProps>`
  &:after {
    content: "";
    height: 3px;
    background-color: #c0696b;
    width: 100%;    
    margin-top: 10px;
    ${({selected}) => selected && 
        css`display: block;`
    }
  }
`

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      display: flex;

      div {
        & + div {
          margin-left: 32px;
        }
      }

      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;
