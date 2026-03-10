import styled, { css } from "styled-components";

interface IButtonWrapper {
  variant?: "primary" | "secondary"; // variant? -> Se quiser passar ou não essa prop quando usar o componente
}

export const ButtonWrapper = styled.button<IButtonWrapper>`
  background: #565656;
  border-radius: 22px;
  position: relative;

  color: #ffffff;
  padding: 2px 12px;
  min-width: 120px;
  width: 100%;

  border: 1px solid #565656;

  ${(props) =>
    props.variant !== "primary" &&
    css`
      min-width: 167px;
      height: 33px;

      background: #e4105b;
      border-color: #e4105b;

      &:hover {
        opacity: 0.6;
      }

      &::after {
        content: "";
        position: absolute;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;
      }
    `}
`;
