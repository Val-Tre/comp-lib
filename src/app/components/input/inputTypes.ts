export interface InputProps {
    isDarkMode: boolean;
    isDisabled: boolean;
    isInvalid: boolean;
    type: "text" | "password" | "email";
    label: string;
    text?: string;
  }

  export interface StyledInputProps {
    isDarkMode: boolean;
    isDisabled: boolean;
    isInvalid: boolean;
  }

  export interface StyledInputWrapperProps {
    isDarkMode: boolean;
    isDisabled: boolean;
    isInvalid: boolean;
  }