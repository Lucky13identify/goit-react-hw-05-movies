import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  margin-top: 20px;
  margin-left: 10px;
  gap: 10px;
`;

export const Input = styled.input`
  width: 40%;
  border: none;
  border-radius: 4px;
  background-color: #f1f1f1;
`;

export const Button = styled.button`
  width: 60px;
  height: 25px;
  padding: 0px;
  background-color: crimson;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 0, 0, 0.1) inset;

  :hover {
    background-color: red;
    box-shadow: none;
  }
`;
