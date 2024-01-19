import { textColors } from "../../styles/globals";
import { StyledCheckboxTitleWrapperProps } from "./checkboxGroupTypes";

export const getDisabledTextColor = (
    props: StyledCheckboxTitleWrapperProps
) => {
    if (props.isDarkMode) {
        if (props.isDisabled) return textColors.darkMode.disabled;
    } else {
        if (props.isDisabled) return textColors.lightMode.disabled;
    }
};
