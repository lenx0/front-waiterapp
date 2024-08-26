import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const BreadcrumbContainer = styled.nav`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 20px;
  color: #1b1b1bd5;
  font-weight: bold;
    font-size: large;
`;

const Crumb = styled.span`
  display: flex;
  align-items: center;
  &:not(:last-child)::before {
    content: '>';
    margin: 0 8px;
    color: #1b1b1bd5;
    font-weight: bold;
    font-size: large;
  }
`;

const BreadcrumbLink = styled(Link)`
  text-decoration: none;
  color: #1b1b1bd5;
  font-weight: bold;
  font-size: large;
  display: flex;
  align-items: center;
  &:hover {
    text-decoration: underline;
  }
`;

const IconWrapper = styled.span`
  margin-right: 4px;
  display: flex;
  align-items: center;
`;

const Breadcrumbs: React.FC = () => {
  const location = useLocation();

  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbNameMap: { [key: string]: { name: string; icon: JSX.Element } } = {
    '': { name: 'Pedidos', icon: <HomeIcon /> },
    history: { name: 'Histórico', icon: <HistoryIcon /> },
    menu: { name: 'Cardápio', icon: <MenuBookIcon /> },
    user: { name: 'Usuários', icon: <PeopleIcon /> },
    profile: { name: 'Meu Perfil', icon: <AccountCircleIcon /> },
    sair: { name: 'Sair', icon: <ExitToAppIcon /> },
  };

  console.log('pathnames:', pathnames)

  return (
    <BreadcrumbContainer>
      {pathnames.length > 0 ? (
        <>
          <IconWrapper>
            <HomeIcon />
          </IconWrapper>
          <Crumb>
            <BreadcrumbLink to="/order">
              Home
            </BreadcrumbLink>
          </Crumb>
          {pathnames[0] !== 'order' && (
            <Crumb />
          )}
        </>
      ) : (
        <Crumb>
          <IconWrapper>
            <HomeIcon />
          </IconWrapper>
          Home
        </Crumb>
      )}

      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const crumb = breadcrumbNameMap[value];

        return last ? (
          <Crumb key={to}>
            <IconWrapper>{crumb?.icon}</IconWrapper>
            {crumb?.name}
          </Crumb>
        ) : (
          <Crumb key={to}>
            <BreadcrumbLink to={to}>
              <IconWrapper>{crumb?.icon}</IconWrapper>
              {crumb?.name}
            </BreadcrumbLink>
          </Crumb>
        );
      })}
    </BreadcrumbContainer>
  );
};

export default Breadcrumbs;
