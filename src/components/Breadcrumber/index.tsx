// src/components/Breadcrumbs.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const BreadcrumbContainer = styled.nav`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 20px;
`;

const Crumb = styled.span`
  &:not(:last-child)::after {
    content: '>';
    margin: 0 8px;
    color: #888;
  }
`;

const BreadcrumbLink = styled(Link)`
  text-decoration: none;
  color: #555;
  &:hover {
    text-decoration: underline;
  }
`;

const Breadcrumbs: React.FC = () => {
  const location = useLocation();

  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbNameMap: { [key: string]: string } = {
    '': 'Pedidos',
    'history': 'Histórico',
    'menu': 'Cardápio',
    'user': 'Usuários',
    'profile': 'Meu Perfil',
    'sair': 'Sair',
  };

  return (
    <BreadcrumbContainer>
      {pathnames.length > 0 ? (
        <Crumb>
          <BreadcrumbLink to="/">Home</BreadcrumbLink>
        </Crumb>
      ) : (
        <Crumb>Home</Crumb>
      )}

      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return last ? (
          <Crumb key={to}>{breadcrumbNameMap[value]}</Crumb>
        ) : (
          <Crumb key={to}>
            <BreadcrumbLink to={to}>{breadcrumbNameMap[value]}</BreadcrumbLink>
          </Crumb>
        );
      })}
    </BreadcrumbContainer>
  );
};

export default Breadcrumbs;
