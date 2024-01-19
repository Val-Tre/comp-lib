import { textColors } from "../../styles/globals";
import styled, { css } from "styled-components";
import {
    StyledCheckboxErrorTitleWrapperProps,
    StyledCheckboxTitleWrapperProps,
} from "./checkboxGroupTypes";
import { getDisabledTextColor } from "./checkboxGroupUtils";


export const StyledCheckboxGroupWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledCheckboxTitleWrapper = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "isDarkMode" && prop !== "isDisabled",
})<StyledCheckboxTitleWrapperProps>`
    margin-bottom: 16px;
    color: ${getDisabledTextColor};
`;

export const StyledCheckboxErrorTitleWrapper = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "isInvalid",
})<StyledCheckboxErrorTitleWrapperProps>`
    ${(props) =>
        props.isInvalid &&
        css`
            color: ${textColors.lightMode.error};

            svg {
                path {
                    fill: ${textColors.lightMode.error};
                }
            }
        `};
`;

export const StyledCheckboxesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
`;
