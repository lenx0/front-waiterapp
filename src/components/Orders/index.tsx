import { Order } from '../../types/Order.ts'
import { OrdersBoard } from '../OrdersBoard/index.tsx'
import { Container } from './styles.ts'

const orders: Order[] = [
  {
      "_id": "66be07b003c48fa6ecc8bde0",
      "table": "3",
      "status": "WAITING",
      "products": [
          {
              "product": {
                  "name": "Coca cola",
                  "imagePath": "1723728530935-coca-cola.png",
                  "price": 7,
              },
              "quantity": 2,
              "_id": "66be07b003c48fa6ecc8bde1"
          },
          {
            "product": {
                "name": "Pizza quatro queijos",
                "imagePath": "1723654129603-quatro-queijos.png",
                "price": 40,
            },
            "quantity": 2,
            "_id": "66be60df0b4c30dc48dc61b1"
        }
      ],
  }
]

export function Orders () {
  return (
    <Container>
      <OrdersBoard
      icon="🕰️"
      title="Fila de espera"
      orders={orders}
      />
      <OrdersBoard
      icon="👨‍🍳"
      title="Em preparação"
      orders={[]}
      />
      <OrdersBoard
      icon="✔️"
      title="Concluidos"
      orders={[]}
      />
    </Container>
  )
}
