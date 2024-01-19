export interface ButtonProps {
    isDarkMode: boolean;
    priority: "primary" | "secondary" | "tretiary";
    isDisabled: boolean;
    iconStart?:
        | "IconChevronDown"
        | "IconClose"
        | "IconDarkMode"
        | "IconDone"
        | "IconLightMode";
    iconEnd?:
        | "IconChevronDown"
        | "IconClose"
        | "IconDarkMode"
        | "IconDone"
        | "IconLightMode";
    label?: string;
    onClick: () => void;
}

export interface StyledButtonProps {
    isDarkMode: boolean;
    priority: "primary" | "secondary" | "tretiary";
    isDisabled: boolean;
}
