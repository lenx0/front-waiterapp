import { useEffect, useState } from "react";
import GenericTable from "../../components/Table";
import { UserTypes } from "../../types/User";
import { api } from "../../utils/api";

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
    <GenericTable
      columns={columns}
      data={users}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};
