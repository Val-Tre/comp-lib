import styled from "styled-components";
import { StyledButtonProps } from "./buttonTypes";
import {
    getButtonActiveBackgroundColors,
    getButtonActiveBorderColors,
    getButtonActiveColors,
    getButtonBackgroundColors,
    getButtonBorderColors,
    getButtonColors,
    getButtonHoverBackgroundColors,
    getButtonHoverBorderColors,
    getButtonHoverColors,
    getButtonIconFillColor,
    getButtonHoverIconFillColor,
    getButtonActiveIconFillColor
} from "./buttonUtils";

export const StyledButton = styled.button.withConfig({
    shouldForwardProp: (prop) =>
        prop !== "isDarkMode" && prop !== "isDisabled" && prop !== "priority",
})<StyledButtonProps>`
    cursor: pointer;
    display: flex;
    // gap: 8px;
    padding: 6px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border-width: 1.5px;
    border-style: solid;
    border-color: ${getButtonBorderColors};
    color: ${getButtonColors};
    background-color: ${getButtonBackgroundColors};
    pointer-events: ${(props) => (props.isDisabled ? "none" : "all")};

    span {
        padding: 0 8px;
    }

    svg {
        path {
            fill: ${getButtonIconFillColor};
        }
    }

    &:hover {
        border-color: ${getButtonHoverBorderColors};
        color: ${getButtonHoverColors};
        background-color: ${getButtonHoverBackgroundColors};

        svg {
            path {
                fill: ${getButtonHoverIconFillColor};
            }
        }
    }

    &:active {
        border-color: ${getButtonActiveBorderColors};
        color: ${getButtonActiveColors};
        background-color: ${getButtonActiveBackgroundColors};

        svg {
            path {
                fill: ${getButtonActiveIconFillColor};
            }
        }
    }
`;
