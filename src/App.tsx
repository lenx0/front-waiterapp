import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';

export function App() {
  return (
    <AuthProvider>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<LoginLayout><Login /></LoginLayout>} />
          <Route
            path="/order"
            element={
              <PrivateRoute element={<DefaultLayout><Orders /></DefaultLayout>} />
            }
          />
          <Route
            path="/history"
            element={
              <PrivateRoute element={<DefaultLayout><History /></DefaultLayout>} />
            }
          />
          <Route
            path="/menu"
            element={
              <PrivateRoute element={<DefaultLayout><Menu /></DefaultLayout>} />
            }
          />
          <Route
            path="/user"
            element={
              <PrivateRoute element={<DefaultLayout><User /></DefaultLayout>} />
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute element={<DefaultLayout><Profile /></DefaultLayout>} />
            }
          />
        </Routes>
      </Router>
      <ToastContainer position="bottom-center" />
    </AuthProvider>
  );
}
