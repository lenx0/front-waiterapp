import styled from "styled-components";

export const TableContainer = styled.div`
  width: 100%;
  margin: 20px 0;
  border-radius: 8px;
  overflow-x: auto;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const TableHeader = styled.th`
  padding: 12px;
  background-color: #f7f7f7;
  text-align: left;
  font-weight: 600;
  border-bottom: 1px solid #e0e0e0;
`;

export const TableCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid #e0e0e0;
  text-align: left;
`;

export const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 8px;
`;
