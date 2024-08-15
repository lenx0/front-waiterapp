import { useEffect } from 'react'
import closeIcon from '../../assets/images/close-icon.svg'
import { Order } from '../../types/Order'
import { formatCurrency } from '../../utils/formatCurrency'

import { ModalBody, OrderDetails, Overlay, Actions } from './styles'

interface OrderModalProps {
  visible: boolean
  order: Order | null //pedido que vem do ordersboard
  onClose: () => void
}

export function OrderModal ({ visible, order, onClose }: OrderModalProps) {
  useEffect(() => {
    function handleKeyDown (event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  if (!visible || !order) {
    //se não houver true para o modal ou não houver pedidos
    return null
  }

  // let total = 0
  // order.products.forEach(({ product, quantity }) => {
  //   total += product.price * quantity
  // })

  const total = order.products.reduce((total, { product, quantity }) => {
    return total + product.price * quantity
  }, 0)

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type='button' onClick={onClose}>
            <img src={closeIcon} alt='ícone de fechar' />
          </button>
        </header>
        <div className='status-container'>
          <small>Status do pedido</small>
          <div>
            <span>
              {order.status === 'WAITING' && '🕰️'}
              {order.status === 'IN_PRODUCTION' && '👨‍🍳'}
              {order.status === 'DONE' && '✔️'}
            </span>

            <strong>
              {order.status === 'WAITING' && 'Fila de espera'}
              {order.status === 'IN_PRODUCTION' && 'Em preparação'}
              {order.status === 'DONE' && 'Pronto'}
            </strong>
          </div>
        </div>
        <OrderDetails>
          <strong>Itens</strong>
          <div className='order-items'>
            {order.products.map(({ _id, product, quantity }) => (
              <div className='item' key={_id}>
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                  width='48'
                  height='28.51'
                />

                <span className='quantity'>{quantity}x</span>

                <div className='product-details'>
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>
          <div className='total'>
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </OrderDetails>
        <Actions>
          <button type='button' className='primary'>
            <span>👨‍🍳</span>
            <strong>Iniciar produção</strong>
          </button>
          <button type='button' className='secondary'>
            <span>👨‍🍳</span>
            <strong>Cancelar pedido</strong>
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  )
}
