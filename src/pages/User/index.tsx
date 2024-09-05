import { useEffect, useState } from "react";
import GenericTable from "../../components/Table";
import { UserTypes } from "../../types/User";
import { api } from "../../utils/api";
import { Container, ContainerDetails, UserQuantity } from "./styles";

const columns = [
  { title: 'Nome', key: 'name' },
  { title: 'Usuário', key: 'email' },
  { title: 'Acesso', key: 'role' }
];

export function User() {
  const [users, setUsers] = useState<UserTypes[]>([])
  const handleEdit = (user: UserTypes) => {
    console.log('Visualizar usuário:', user);
  };

  const handleDelete = (user: UserTypes) => {
    console.log('Excluir usuário:', user);
  };

  async function getUsers() {
    const response = await api.get('/users');
    setUsers(response.data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <Container>
      <ContainerDetails>
        <h3>Usuários</h3>
        <UserQuantity>
          <h3>{users.length}</h3>
        </UserQuantity>
      </ContainerDetails>

      <GenericTable
        columns={columns}
        data={users}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </Container>
  );
};
