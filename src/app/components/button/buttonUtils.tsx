import { StyledButtonProps } from "./buttonTypes";
import {
    textColors,
    borderColors,
    backgroundColors,
} from "../../styles/globals";

export const getButtonBorderColors = (props: StyledButtonProps) => {
    if (props.isDarkMode) {
        if (props.isDisabled) return borderColors.darkMode.neutral;
        if (props.priority === "primary") return backgroundColors.darkMode.accent.default;
        if (props.priority === "secondary") return borderColors.darkMode.app;
        if (props.priority === "tretiary") return "transparent";
    } else {
        if (props.isDisabled) return borderColors.lightMode.neutral;
        if (props.priority === "primary") return backgroundColors.lightMode.accent.default;
        if (props.priority === "secondary") return borderColors.lightMode.app;
        if (props.priority === "tretiary") return "transparent";
    }
};

export const getButtonHoverBorderColors = (props: StyledButtonProps) => {
    if (props.isDarkMode) {
        if (props.isDisabled) return borderColors.darkMode.neutral;
        if (props.priority === "primary") return backgroundColors.darkMode.accent.hover;
        if (props.priority === "secondary") return borderColors.darkMode.neutral;
        if (props.priority === "tretiary") return borderColors.darkMode.neutral;
    } else {
        if (props.isDisabled) return borderColors.lightMode.neutral;
        if (props.priority === "primary") return backgroundColors.lightMode.accent.hover;
        if (props.priority === "secondary") return borderColors.lightMode.neutral;
        if (props.priority === "tretiary") return borderColors.lightMode.neutral;
    }
};

export const getButtonActiveBorderColors = (props: StyledButtonProps) => {
    if (props.isDarkMode) {
        if (props.isDisabled) return borderColors.darkMode.neutral;
        if (props.priority === "primary") return backgroundColors.darkMode.accent.active;
        if (props.priority === "secondary") return borderColors.darkMode.neutral;
        if (props.priority === "tretiary") return borderColors.darkMode.neutral;
    } else {
        if (props.isDisabled) return borderColors.lightMode.neutral;
        if (props.priority === "primary") return backgroundColors.lightMode.accent.active;
        if (props.priority === "secondary") return borderColors.lightMode.neutral;
        if (props.priority === "tretiary") return borderColors.lightMode.neutral;
    }
};

export const getButtonColors = (props: StyledButtonProps) => {
    if (props.isDarkMode) {
        if (props.isDisabled) return textColors.darkMode.disabled;
        if (props.priority === "primary") return textColors.darkMode.inverse;
        if (props.priority === "secondary") return textColors.darkMode.secondary;
        if (props.priority === "tretiary") return textColors.darkMode.secondary;
    } else {
        if (props.isDisabled) return textColors.lightMode.disabled;
        if (props.priority === "primary") return textColors.lightMode.inverse;
        if (props.priority === "secondary") return textColors.lightMode.secondary;
        if (props.priority === "tretiary") return textColors.lightMode.secondary;
    }
};

export const getButtonHoverColors = (props: StyledButtonProps) => {
    if (props.isDarkMode) {
        if (props.isDisabled) return textColors.darkMode.disabled;
        if (props.priority === "primary") return textColors.darkMode.inverse;
        if (props.priority === "secondary") return textColors.darkMode.primary;
        if (props.priority === "tretiary") return textColors.darkMode.primary;
    } else {
        if (props.isDisabled) return textColors.lightMode.disabled;
        if (props.priority === "primary") return textColors.lightMode.inverse;
        if (props.priority === "secondary") return textColors.lightMode.primary;
        if (props.priority === "tretiary") return textColors.lightMode.primary;
    }
};

export const getButtonActiveColors = (props: StyledButtonProps) => {
    if (props.isDarkMode) {
        if (props.isDisabled) return textColors.darkMode.disabled;
        if (props.priority === "primary") return textColors.darkMode.inverse;
        if (props.priority === "secondary") return textColors.darkMode.primary;
        if (props.priority === "tretiary") return textColors.darkMode.primary;
    } else {
        if (props.isDisabled) return textColors.lightMode.disabled;
        if (props.priority === "primary") return textColors.lightMode.inverse;
        if (props.priority === "secondary") return textColors.lightMode.primary;
        if (props.priority === "tretiary") return textColors.lightMode.primary;
    }
};

export const getButtonBackgroundColors = (props: StyledButtonProps) => {
    if (props.isDarkMode) {
        if (props.isDisabled) return "transparent";
        if (props.priority === "primary") return backgroundColors.darkMode.accent.default;
        if (props.priority === "secondary") return backgroundColors.darkMode.neutral.default;
        if (props.priority === "tretiary") return "transparent";
    } else {
        if (props.isDisabled) return "transparent";
        if (props.priority === "primary") return backgroundColors.lightMode.accent.default;
        if (props.priority === "secondary") return backgroundColors.lightMode.neutral.default;
        if (props.priority === "tretiary") return "transparent";
    }
};

export const getButtonHoverBackgroundColors = (props: StyledButtonProps) => {
    if (props.isDarkMode) {
        if (props.isDisabled) return "transparent";
        if (props.priority === "primary") return backgroundColors.darkMode.accent.hover;
        if (props.priority === "secondary") return backgroundColors.darkMode.neutral.hover;
        if (props.priority === "tretiary") return "transparent";
    } else {
        if (props.isDisabled) return "transparent";
        if (props.priority === "primary") return backgroundColors.lightMode.accent.hover;
        if (props.priority === "secondary") return backgroundColors.lightMode.neutral.hover;
        if (props.priority === "tretiary") return "transparent";
    }
};

export const getButtonActiveBackgroundColors = (props: StyledButtonProps) => {
    if (props.isDarkMode) {
        if (props.isDisabled) return "transparent";
        if (props.priority === "primary") return backgroundColors.darkMode.accent.active;
        if (props.priority === "secondary") return backgroundColors.darkMode.neutral.active;
        if (props.priority === "tretiary") return backgroundColors.darkMode.neutral.active;
    } else {
        if (props.isDisabled) return "transparent";
        if (props.priority === "primary") return backgroundColors.lightMode.accent.active;
        if (props.priority === "secondary") return backgroundColors.lightMode.neutral.active;
        if (props.priority === "tretiary") return backgroundColors.lightMode.neutral.active;
    }
};

export const getButtonIconFillColor = (props: StyledButtonProps) => {
    if (props.isDarkMode) {
        if (props.isDisabled) return textColors.darkMode.disabled;
        if (props.priority === "primary") return textColors.darkMode.inverse;
        if (props.priority === "secondary") return textColors.darkMode.secondary;
        if (props.priority === "tretiary") return textColors.darkMode.secondary;
    } else {
        if (props.isDisabled) return textColors.lightMode.disabled;
        if (props.priority === "primary") return textColors.lightMode.inverse;
        if (props.priority === "secondary") return textColors.lightMode.secondary;
        if (props.priority === "tretiary") return textColors.lightMode.secondary;
    }
};

export const getButtonHoverIconFillColor = (props: StyledButtonProps) => {
    if (props.isDarkMode) {
        if (props.isDisabled) return textColors.darkMode.disabled;
        if (props.priority === "primary") return textColors.darkMode.inverse;
        if (props.priority === "secondary") return textColors.darkMode.primary;
        if (props.priority === "tretiary") return textColors.darkMode.primary;
    } else {
        if (props.isDisabled) return textColors.lightMode.disabled;
        if (props.priority === "primary") return textColors.lightMode.inverse;
        if (props.priority === "secondary") return textColors.lightMode.primary;
        if (props.priority === "tretiary") return textColors.lightMode.primary;
    }
};

export const getButtonActiveIconFillColor = (props: StyledButtonProps) => {
    if (props.isDarkMode) {
        if (props.isDisabled) return textColors.darkMode.disabled;
        if (props.priority === "primary") return textColors.darkMode.inverse;
        if (props.priority === "secondary") return textColors.darkMode.primary;
        if (props.priority === "tretiary") return textColors.darkMode.primary;
    } else {
        if (props.isDisabled) return textColors.lightMode.disabled;
        if (props.priority === "primary") return textColors.lightMode.inverse;
        if (props.priority === "secondary") return textColors.lightMode.primary;
        if (props.priority === "tretiary") return textColors.lightMode.primary;
    }
};