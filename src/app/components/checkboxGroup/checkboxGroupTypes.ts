export interface CheckboxGroupProps {
    isDarkMode: boolean;
    isInvalid: boolean;
    errorText: string;
    isDisabled: boolean;
    isRequired: boolean;
    title: string;
    information: string;
    children: React.ReactNode
}

export interface StyledCheckboxTitleWrapperProps {
    isDarkMode: boolean;
    isDisabled: boolean;
}

export interface StyledCheckboxErrorTitleWrapperProps {
    isInvalid: boolean;
}