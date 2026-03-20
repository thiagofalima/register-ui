import { InputHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

export const InputContainer = styled.div`
  max-width: 275px;
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #3b3450;

  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const IconContainer = styled.div`
  margin-right: 10px;
`;

export const InputText = styled.input`
  background-color: transparent;
  color: #ffffff;
  border: 0;
  height: 30px;
`;

const ErrorText = styled.p`
  margin-top: 5px 0;
  color: #ff0000;
  font-size: 12px;
`;

// Herdando dos atributos padrão do input para o React
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: any; // tipagem correta para algo que pode ser renderizado
  control?: any;
  name: string;
  errorMessage?: string;
}

export const Input = ({
  leftIcon,
  control,
  name,
  errorMessage,
  ...rest
}: InputProps) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field }) => <InputText {...field} {...rest} />}
      />
      <InputContainer>
        {leftIcon ? (
          <IconContainer>
            <img src={leftIcon} />
          </IconContainer>
        ) : null}
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  );
};
