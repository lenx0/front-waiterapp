import { ActionButton, Table, TableCell, TableContainer, TableHeader, TableRow } from './styles';
import { AiOutlineEye, AiOutlineDelete } from 'react-icons/ai';

interface Column<T> {
  title: string;
  key: keyof T;
  accessor?: (item: T) => React.ReactNode;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
}

const GenericTable = <T extends object>({ columns, data, onEdit, onDelete }: TableProps<T>) => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <TableRow>
            {columns.map((column, index) => (
              <TableHeader key={index}>{column.title}</TableHeader>
            ))}
            {(onEdit || onDelete) && <TableHeader>Ações</TableHeader>}
          </TableRow>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableCell key={String(column.key)}>
                  {column.accessor ? column.accessor(item) : String(item[column.key])}
                </TableCell>
              ))}
              {(onEdit || onDelete) && (
                <TableCell>
                  {onEdit && (
                    <ActionButton onClick={() => onEdit(item)}>
                      <AiOutlineEye size={20} />
                    </ActionButton>
                  )}
                  {onDelete && (
                    <ActionButton onClick={() => onDelete(item)}>
                      <AiOutlineDelete size={20} color="red" />
                    </ActionButton>
                  )}
                </TableCell>
              )}
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};


export default GenericTable;
