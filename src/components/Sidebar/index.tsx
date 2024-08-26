import React from 'react';
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const SidebarContainer = styled.div`
  width: 80px;
  height: 100vh;
  background-color: #fff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  position: fixed;
`;

const Logo = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #666;
  text-align: center;
`;

const Menu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;

`;

const MenuItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
  cursor: pointer;
  color: #666;

  &:hover {
    background-color: #f0f0f0;
    border-bottom: 1px solid #D75035;
  }
`;

const MenuText = styled.span`
  font-size: 12px;
  color:#333;
  margin-top: 5px;
`;

const Sidebar: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/', { replace: true });
  };

  return (
    <SidebarContainer>
      <Logo>Comanda rápida</Logo>
      <Menu>
        <Link to="" style={{ textDecoration: 'none' }}>
          <MenuItem>
            <HomeIcon style={{ color: 'red' }} />
            <MenuText>Home</MenuText>
          </MenuItem>
        </Link>
        <Link to="/history" style={{ textDecoration: 'none' }}>
          <MenuItem>
            <HistoryIcon />
            <MenuText>Histórico</MenuText>
          </MenuItem>
        </Link>
        <Link to="/menu" style={{ textDecoration: 'none' }}>
          <MenuItem>
            <MenuBookIcon />
            <MenuText>Cardápio</MenuText>
          </MenuItem>
        </Link>
        <Link to="/user" style={{ textDecoration: 'none' }}>
          <MenuItem>
            <PeopleIcon />
            <MenuText>Usuários</MenuText>
          </MenuItem>
        </Link>
        <Link to="/profile" style={{ textDecoration: 'none' }}>
          <MenuItem>
            <AccountCircleIcon />
            <MenuText>Meu Perfil</MenuText>
          </MenuItem>
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <MenuItem onClick={handleLogout}>
            <PowerSettingsNewIcon />
            <MenuText>Sair</MenuText>
          </MenuItem>
        </Link>
      </Menu>
    </SidebarContainer>
  );
};

export default Sidebar;
