import { useEffect, useState } from 'react'
import socketIo from 'socket.io-client'
import { Order } from '../../types/Order.ts'
import { OrdersBoard } from '../OrdersBoard/index.tsx'
import { OrdersContainer, SideBarContainer } from './styles.ts'
import { api } from '../../utils/api.ts'
import Sidebar from '../Sidebar/index.tsx'

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    const socket = socketIo('http://localhost:3001', {
      transports: ['websocket'],
    })

    socket.on('orders@new', (order) => {
      setOrders(prevState => prevState.concat(order))
    })
  }, [])

  useEffect(() => {
    api.get('/orders')
      .then(({ data }) => {
        setOrders(data)
      })
  }, [orders])

  const waiting = orders.filter((orders) => orders.status === 'WAITING')
  const inProduction = orders.filter((orders) => orders.status === 'IN_PRODUCTION')
  const done = orders.filter((orders) => orders.status === 'DONE')

  function handleCancelOrder(orderId: string) {
    setOrders((prevState) => prevState.filter(order => order._id !== orderId))
  }

  function handleOrderStatusChange(orderId: string, status: Order['status']) {
    setOrders((prevState) => prevState.map((order) => (
      order._id === orderId
        ? { ...order, status }
        : order
    )))
  }

  return (
    <>
      <SideBarContainer>
        <Sidebar />
      </SideBarContainer>
      <OrdersContainer>
        <OrdersBoard
          icon="🕰️"
          title="Fila de espera"
          orders={waiting}
          onCancelOrder={handleCancelOrder}
          onChangeOrderStatus={handleOrderStatusChange}
        />
        <OrdersBoard
          icon="👨‍🍳"
          title="Em preparação"
          orders={inProduction}
          onCancelOrder={handleCancelOrder}
          onChangeOrderStatus={handleOrderStatusChange}
        />
        <OrdersBoard
          icon="✔️"
          title="Concluidos"
          orders={done}
          onCancelOrder={handleCancelOrder}
          onChangeOrderStatus={handleOrderStatusChange}
        />
      </OrdersContainer>
    </>
  )
}
