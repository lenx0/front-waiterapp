import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: hsl(0, 0%, 100%);
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const LoginTitleContainer = styled.div`
  text-align: center;
  margin: 24px;
`;

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 20px 20px;
  gap: 10px;
`;

export const Input = styled.input`
  width: 384px;
  height: 56px;
  border-radius: 8px;
  border: 1px solid #cccccc;
  padding: 20px;
  gap: 4px;
`;


