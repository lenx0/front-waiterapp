import { AiOutlineEye, AiOutlineDelete } from 'react-icons/ai';
import { ActionButton, Table, TableCell, TableContainer, TableHeader, TableRow } from './styles';
interface TableColumn {
  title: string;
  key: string;
}

interface TableProps<T extends Record<string, any>> {
  columns: TableColumn[];
  data: T[];
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
}

const GenericTable = <T extends Record<string, any>>({
  columns,
  data,
  onEdit,
  onDelete,
}: TableProps<T>) => {
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
          {data.map((item, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((column, colIndex) => (
                <TableCell key={colIndex}>
                  {item[column.key] !== undefined ? item[column.key] : '-'}
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
