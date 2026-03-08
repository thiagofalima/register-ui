import { MouseEventHandler } from "react";
import { ButtonWrapper } from "./ButtonWrapper";

interface IButton{
  title: string;
  variant?: "primary" | "secondary";  // Mesmo tipo da outra interface
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Button = ({title, variant="primary", onClick}: IButton) => {
  return (
    <ButtonWrapper variant={ variant } onClick={ onClick }>
      { title }
    </ButtonWrapper>
  )
}