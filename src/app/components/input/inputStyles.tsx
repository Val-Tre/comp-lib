import styled from "styled-components";
import { StyledInputProps, StyledInputWrapperProps } from "./inputTypes";
import {
    getInputBackgroundColors,
    getInputBorderColors,
    getInputBorderHoverActiveFocusedColors,
    getInputTextColors,
    getInputWrapperColors,
} from "./inputUtils";

export const StyledInputWrapper = styled.div.withConfig({
    shouldForwardProp: (prop) =>
        prop !== "isDarkMode" && prop !== "isDisabled" && prop !== "isInvalid",
})<StyledInputWrapperProps>`
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    color: ${getInputWrapperColors};

    svg {
        path {
            fill: ${getInputWrapperColors};
        }
    }
`;

export const StyledInput = styled.input.withConfig({
    shouldForwardProp: (prop) =>
        prop !== "isDarkMode" && prop !== "isDisabled" && prop !== "isInvalid",
})<StyledInputProps>`
    box-sizing: border-box;
    border-style: solid;
    border-width: 1.5px;
    border-radius: 4px;
    margin: 0;
    border-color: ${getInputBorderColors};
    color: ${getInputTextColors};
    background-color: ${getInputBackgroundColors};
    padding: 6px 8px;

    &:hover {
        border-color: ${getInputBorderHoverActiveFocusedColors};
    }

    &:focus {
        border-color: ${getInputBorderHoverActiveFocusedColors};
    }

    &:focus-visible,
    &:focus-within {
        outline: none;
    }
`;
