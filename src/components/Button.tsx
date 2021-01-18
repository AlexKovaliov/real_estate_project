import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Button = styled(Link)`
  background: ${({primary}: any) => (primary ? '#000d1a' : 'CD853F')};
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({big}: any) => (big ? '16px 40px' : '14px 24px')};
  color: ${({primary}: any) => (primary ? '#fff' : '#000d1a')};
  font-size: ${({big}: any) => (big ? '20px' : '14px')};

  &:hover {
    transform: translateY(-2px);
  }
`;