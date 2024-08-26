// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Orders } from './components/Orders';
import { GlobalStyles } from './styles/GlobalStyles';
import { History } from './pages/History';
import { Menu } from './pages/Menu';
import { User } from './pages/User';
import { Profile } from './pages/Profile';
import { Login } from './pages/Login';
import { DefaultLayout } from './layouts/DefaultLayout';
import { LoginLayout } from './layouts/LoginLayout';

export function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<LoginLayout><Login /></LoginLayout>} />
          <Route path="/order" element={<DefaultLayout><Orders /></DefaultLayout>} />
          <Route path="/history" element={<DefaultLayout><History /></DefaultLayout>} />
          <Route path="/menu" element={<DefaultLayout><Menu /></DefaultLayout>} />
          <Route path="/user" element={<DefaultLayout><User /></DefaultLayout>} />
          <Route path="/profile" element={<DefaultLayout><Profile /></DefaultLayout>} />
        </Routes>
      </Router>
      <ToastContainer position="bottom-center" />
    </>
  );
}
