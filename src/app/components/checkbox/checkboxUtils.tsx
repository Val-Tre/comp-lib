import { StyledCheckboxProps } from "./checkboxTypes";

import {
    textColors,
    borderColors,
    backgroundColors,
} from "../../styles/globals";

export const getCheckboxBorderColors = (props: StyledCheckboxProps) => {
    if (props.isDarkMode) {
        if (props.isDisabled) return borderColors.darkMode.app;
        if (props.checked) return backgroundColors.darkMode.accent.default;
        else return borderColors.darkMode.neutral;
    } else {
        if (props.isDisabled) return borderColors.lightMode.app;
        if (props.checked) return backgroundColors.lightMode.accent.default;
        else return borderColors.lightMode.neutral;
    }
};

export const getCheckboxHoverBorderColors = (props: StyledCheckboxProps) => {
    if (props.isDarkMode) {
        if (props.isDisabled) return borderColors.darkMode.app;
        if (props.checked) return borderColors.darkMode.accent;
        else return borderColors.darkMode.accent;
    } else {
        if (props.isDisabled) return borderColors.lightMode.app;
        if (props.checked) return borderColors.lightMode.accent;
        else return borderColors.lightMode.accent;
    }
};

export const getCheckboxActiveBorderColors = (props: StyledCheckboxProps) => {
    if (props.isDarkMode) {
        if (props.isDisabled) return borderColors.darkMode.app;
        if (props.checked) return borderColors.darkMode.accent;
        else return borderColors.darkMode.accent;
    } else {
        if (props.isDisabled) return borderColors.lightMode.app;
        if (props.checked) return borderColors.lightMode.accent;
        else return borderColors.lightMode.accent;
    }
};

export const getCheckboxBackgroundColors = (props: StyledCheckboxProps) => {
    if (props.isDarkMode) {
        if (props.isDisabled) return "transparent";
        if (props.checked) return backgroundColors.darkMode.accent.default;
        else return backgroundColors.darkMode.neutral.default;
    } else {
        if (props.isDisabled) return "transparent";
        if (props.checked) return backgroundColors.lightMode.accent.default;
        else return backgroundColors.lightMode.neutral.default;
    }
};

export const getCheckboxHoverBackgroundColors = (
    props: StyledCheckboxProps
) => {
    if (props.isDarkMode) {
        if (props.isDisabled) return "transparent";
        if (props.checked) return backgroundColors.darkMode.accent.hover;
        else return backgroundColors.darkMode.neutral.default;
    } else {
        if (props.isDisabled) return "transparent";
        if (props.checked) return backgroundColors.lightMode.accent.hover;
        else return backgroundColors.lightMode.neutral.default;
    }
};

export const getCheckboxActiveBackgroundColors = (
    props: StyledCheckboxProps
) => {
    if (props.isDarkMode) {
        if (props.isDisabled) return "transparent";
        if (props.checked) return backgroundColors.darkMode.accent.active;
        else return backgroundColors.darkMode.neutral.active;
    } else {
        if (props.isDisabled) return "transparent";
        if (props.checked) return backgroundColors.lightMode.accent.active;
        else return backgroundColors.lightMode.neutral.active;
    }
};

export const getCheckboxIconColors = (props: StyledCheckboxProps) => {
    if (props.isDarkMode) {
        if (props.isDisabled) return borderColors.darkMode.app;
        if (props.checked) return textColors.darkMode.inverse;
        else return "transparent";
    } else {
        if (props.isDisabled) return borderColors.lightMode.app;
        if (props.checked) return textColors.lightMode.inverse;
        else return "transparent";
    }
};
