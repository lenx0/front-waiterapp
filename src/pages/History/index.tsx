import { useEffect, useState } from "react";
import GenericTable from "../../components/Table";
import { api } from "../../utils/api";
import { Order } from "../../types/Order";
import { formatDate } from "../../utils/formatDate";

const statusTranslations: Record<string, string> = {
  WAITING: 'Aguardando',
  IN_PREPARATION: 'Em Preparação',
  DONE: 'Pronto',
  FINISHED: 'Finalizado'
};

const calculateTotal = (products: { product: { price: number }, quantity: number }[]) => {
  return products.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);
};


const columns = [
  { title: 'Mesa', key: 'table' },
  { title: 'Horário', key: 'createdAt', accessor: (item: Order) => formatDate(item.createdAt) },
  { title: 'Nome', key: 'name', accessor: (item: Order) => item.products[0].product.name },
  { title: 'Status', key: 'status', accessor: (item: Order) => statusTranslations[item.status] },
  {
    title: 'Total',
    key: 'total',
    accessor: (item: Order) => `R$ ${calculateTotal(item.products).toFixed(2)}`,
  }
];

export function History() {
  const [orders, setOrders] = useState<Order[]>([])

  const handleEdit = (order: Order) => {
    console.log('Visualizar pedido:', order);
  };

  const handleDelete = (order: Order) => {
    console.log('Excluir pedido:', order);
  };

  useEffect(() => {
    api.get('/orders')
      .then(({ data }) => {
        setOrders(data)
        console.log(data)
      })
  }, [])

  return (
    <GenericTable
      columns={columns}
      data={orders}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};
