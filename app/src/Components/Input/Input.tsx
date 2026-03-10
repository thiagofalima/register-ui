import { InputHTMLAttributes, ReactNode } from "react";
import styled from "styled-components"

export const InputContainer = styled.div`
    max-width: 275px;
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #3B3450;

    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

export const IconContainer = styled.div`
    margin-right: 10px;
`

export const InputText = styled.input`
    background-color: transparent;
    color: #FFFFFF;
    border: 0;
    height: 30px;
`

// Herdando dos atributos padrão do input para o React
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    leftIcon?: any; // tipagem correta para algo que pode ser renderizado
    name: string;
}

export const Input = ({leftIcon, name, ...rest}:InputProps) => {
    return (
        <InputContainer>
        { leftIcon ? (<IconContainer><img src={leftIcon} /></IconContainer>): null }
            <InputText name={name} {...rest}/>
        </InputContainer>
    )
}