import styled, { css } from "styled-components";

interface IButton{
    variant: "primary" | "secondary"  // variant? -> Se quiser passar ou não essa prop quando usar o componente
}

export const Button = styled.button<IButton>`
  min-width: 120px;
  width: 100%;
  padding: 2px 12px;

  background: #565656;
  border-radius: 22px;
  position: relative;
  color: #ffffff;

  ${(props) => 
    props.variant !== "primary" &&
    css`
      min-width: 167px;
      height: 33px;

      background: #E4105B;

      &::after {
        content: "";
        position: absolute;
        border: 1px solid #E4105B;
        top: -5px;
        left: -6px;
        width: calc(100% - 10px);
        height: calc(100% + 10px);
        border-radius: 22px;
      }
    `}
`;
