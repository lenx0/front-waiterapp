import { useState } from "react";
import { ButtonComponent } from "../../components/Form/Button/styles";
import { InputComponent } from "../../components/Form/Input/styles";
import { LoginContainer, LoginFormContainer, LoginTitleContainer } from "./styles";
import { validatePassword } from "../../utils/validadePassword";
import { login } from "../../utils/api";
import { useNavigate } from 'react-router-dom';


export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validatePassword(password);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);

    try {
      await login({ email, password });
      navigate('/order');
    } catch {
      setSubmitError('Falha ao fazer login. Tente novamente.');
    }
  };

  return (
    <LoginContainer>
      <LoginTitleContainer>
        <h4 style={{ fontWeight: '700', opacity: '0.8' }}>Bem-vindo(a) ao</h4>
        <h1 style={{ fontWeight: '700' }}>COZINHA</h1>
        <h1 style={{ opacity: '0.8' }}>RÁPIDA</h1>
      </LoginTitleContainer>
      <LoginFormContainer onSubmit={handleSubmit}>
        <label>
          E-mail
        </label>
        <InputComponent
          type="email"
          placeholder="Seu e-mail de acesso"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>
          Senha
        </label>
        <InputComponent
          type="password"
          placeholder="Insira sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}
        {submitError && <p style={{ color: 'red', fontSize: '14px' }}>{submitError}</p>}
        <ButtonComponent type="submit">Fazer login</ButtonComponent>
      </LoginFormContainer>
    </LoginContainer>
  )
}
