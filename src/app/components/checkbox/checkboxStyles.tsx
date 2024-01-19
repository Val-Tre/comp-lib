import styled from "styled-components";
import { StyledCheckboxProps } from "./checkboxTypes";

import {
    getCheckboxBorderColors,
    getCheckboxBackgroundColors,
    getCheckboxHoverBorderColors,
    getCheckboxHoverBackgroundColors,
    getCheckboxActiveBorderColors,
    getCheckboxActiveBackgroundColors,
    getCheckboxIconColors,
} from "./checkboxUtils";

export const StyledCheckboxWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledTextWrapper = styled.div`
    padding-left: 28px;
`;

export const StyledCheckbox = styled.span.withConfig({
    shouldForwardProp: (prop) =>
        prop !== "isDarkMode" && prop !== "isDisabled" && prop !== "checked",
})<StyledCheckboxProps>`
    display: inline-block;
    position: relative;
    margin-right: 8px;
    cursor: pointer;
    width: 20px;
    height: 20px;
    overflow: hidden;
    pointer-events: ${(props) => (props.isDisabled ? "none" : "all")};
    border-radius: 4px;
    border-width: 1.5px;
    border-style: solid;
    border-color: ${getCheckboxBorderColors};
    background-color: ${getCheckboxBackgroundColors};

    svg {
        path {
            fill: ${getCheckboxIconColors};
        }
    }

    &:hover {
        border-color: ${getCheckboxHoverBorderColors};
        background-color: ${getCheckboxHoverBackgroundColors};
    }

    &:active {
        border-color: ${getCheckboxActiveBorderColors};
        background-color: ${getCheckboxActiveBackgroundColors};
    }

    div {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`;
