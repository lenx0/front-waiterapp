import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Orders } from './components/Orders'
import { GlobalStyles } from './styles/GlobalStyles'

export function App () {
  return (
    <>
      <GlobalStyles />
      <Orders />
      <ToastContainer position="bottom-center" />
    </>
  )
}
