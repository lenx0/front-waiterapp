// src/components/Sidebar.tsx
import React from 'react';
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

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

const MenuItem = styled.li<{ active?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
  cursor: pointer;
  color: ${(props) => (props.active ? '#000' : '#666')};

  &:hover {
    background-color: #f0f0f0;
    border-bottom: 1px solid #D75035;
  }
`;

const MenuText = styled.span<{ active?: boolean }>`
  font-size: 12px;
  color: ${(props) => (props.active ? 'red' : '#333')};
  margin-top: 5px;
`;

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <Logo>Comanda rápida</Logo>
      <Menu>
        <MenuItem active>
          <HomeIcon style={{ color: 'red' }} />
          <MenuText active>Home</MenuText>
        </MenuItem>
        <MenuItem>
          <HistoryIcon />
          <MenuText>Histórico</MenuText>
        </MenuItem>
        <MenuItem>
          <MenuBookIcon />
          <MenuText>Cardápio</MenuText>
        </MenuItem>
        <MenuItem>
          <PeopleIcon />
          <MenuText>Usuários</MenuText>
        </MenuItem>
        <MenuItem>
          <AccountCircleIcon />
          <MenuText>Meu Perfil</MenuText>
        </MenuItem>
        <MenuItem>
          <PowerSettingsNewIcon />
          <MenuText>Sair</MenuText>
        </MenuItem>
      </Menu>
    </SidebarContainer>
  );
};

export default Sidebar;
