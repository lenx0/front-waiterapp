import GenericTable from "../../components/Table";

const users = [
  { id: 1, name: 'Thiago Beraldo', email: 'thiago@example.com', role: 'Admin' },
  { id: 2, name: 'John Doe', email: 'john@example.com', role: 'User' }
];

const columns = [
  { title: 'ID', key: 'id' },
  { title: 'Nome', key: 'name' },
  { title: 'Email', key: 'email' },
  { title: 'Role', key: 'role' }
];

export function User() {
  const handleEdit = (user: any) => {
    console.log('Visualizar usuário:', user);
  };

  const handleDelete = (user: any) => {
    console.log('Excluir usuário:', user);
  };

  return (
    <GenericTable
      columns={columns}
      data={users}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};
