import { useEffect, useState } from "react";
import GenericTable from "../../components/Table";
import { api } from "../../utils/api";
import { Order } from "../../types/Order";
import { formatDate } from "../../utils/formatDate";
import { statusTranslations } from "../../utils/statusTranslations";
import { Container, ContainerDetails, OrderQuantity } from "./styles";

const columns = [
  { title: 'Mesa', key: 'table' },
  { title: 'Data', key: 'createdAt' },
  { title: 'Nome', key: 'name' },
  { title: 'Status', key: 'status' },
  { title: 'Total', key: 'total' }
];

function extractProductNames(order: Order): string {
  return order.products.map(item => item.product.name).join(', ');
}

function extractOrderStatus(order: Order): string {
  return statusTranslations[order.status] || order.status;
}

export function History() {
  const [orders, setOrders] = useState<Order[]>([]);

  async function getOrders() {
    const response = await api.get('/orders');
    const ordersData: Order[] = response?.data;

    const ordersWithDetails = ordersData.map(order => {
      const total = order.products.reduce((acc, item) => {
        return acc + item.product.price * item.quantity;
      }, 0);

      return {
        ...order,
        total: `R$ ${total.toFixed(2)}`,
        createdAt: formatDate(order.createdAt),
        name: extractProductNames(order),
        status: extractOrderStatus(order)
      };
    });

    setOrders(ordersWithDetails);
  }

  useEffect(() => {
    getOrders()
  }, [])

  const handleEdit = (order: Order) => {
    console.log('Visualizar pedido:', order);
  };

  const handleDelete = (order: Order) => {
    console.log('Excluir pedido:', order);
  };

  return (
    <Container>
      <ContainerDetails>
        <h3>Pedidos</h3>
        <OrderQuantity>
          <h3>{orders.length}</h3>
        </OrderQuantity>
      </ContainerDetails>
    <GenericTable
      columns={columns}
      data={orders}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
    </Container>
  );
};

