import styled from "styled-components";

export const Container = styled.div`
  background: #d75035;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  flex-direction: column;

  input {
    padding: 10px;
    margin: 10px 0;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    color: #fff;
    background: #212121;
  }
`;
