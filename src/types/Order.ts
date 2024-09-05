export interface Order {
  total: string
  _id: string
  table: string
  name: string
  createdAt: string;
  // status: 'WAITING' | 'IN_PRODUCTION' | 'DONE'
  status: string
  products: {
    _id: string
    quantity: number
    product: {
      name: string
      imagePath: string
      price: number
    }
  }[]

}
