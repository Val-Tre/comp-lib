import { StyledInputProps } from "./inputTypes";
import {
    textColors,
    borderColors,
    backgroundColors,
} from "../../styles/globals";

export const getInputTextColors = (props: StyledInputProps) => {
    if (props.isDarkMode) {
        if (props.isDisabled) return textColors.darkMode.disabled;
        return textColors.darkMode.primary;
    } else {
        if (props.isDisabled) return textColors.lightMode.disabled;
        return textColors.lightMode.primary;
    }
};

export const getInputBorderColors = (props: StyledInputProps) => {
    if (props.isDarkMode) {
        if (props.isDisabled) return borderColors.darkMode.app;
        if (props.isInvalid) return borderColors.darkMode.error;
        return borderColors.darkMode.neutral;
    } else {
        if (props.isDisabled) return borderColors.lightMode.app;
        if (props.isInvalid) return borderColors.lightMode.error;
        return borderColors.lightMode.neutral;
    }
};

export const getInputBorderHoverActiveFocusedColors = (
    props: StyledInputProps
) => {
    if (props.isDarkMode) {
        if (props.isDisabled) return borderColors.darkMode.app;
        if (props.isInvalid) return borderColors.darkMode.error;
        return borderColors.darkMode.accent;
    } else {
        if (props.isDisabled) return borderColors.lightMode.app;
        if (props.isInvalid) return borderColors.lightMode.error;
        return borderColors.lightMode.accent;
    }
};

export const getInputBackgroundColors = (props: StyledInputProps) => {
    if (props.isDarkMode) {
        if (props.isDisabled) return backgroundColors.darkMode.app;
        return backgroundColors.darkMode.neutral.default;
    } else {
        if (props.isDisabled) return backgroundColors.lightMode.app;
        return backgroundColors.lightMode.neutral.default;
    }
};

export const getInputWrapperColors = (props: StyledInputProps) => {
    if (props.isDarkMode) {
        if (props.isDisabled) return textColors.darkMode.disabled;
        if (props.isInvalid) return textColors.darkMode.error;
        return textColors.darkMode.primary;
    } else {
        if (props.isDisabled) return textColors.lightMode.disabled;
        if (props.isInvalid) return textColors.lightMode.error;
        return textColors.lightMode.primary;
    }
};
