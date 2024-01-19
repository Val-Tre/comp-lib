"use client";

import React from "react";
import { ButtonProps } from "./buttonTypes";
import { StyledButton } from "./buttonStyles";
import Icon from "../icon/icon";

export const Button: React.FC<ButtonProps> = ({
    isDarkMode,
    priority,
    isDisabled,
    iconStart,
    iconEnd,
    label,
    onClick,
}) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (onClick) {
            onClick();
        }
    };

    return (
        <StyledButton
            isDarkMode={isDarkMode}
            isDisabled={isDisabled}
            priority={priority}
            onClick={handleClick}
        >
            {iconStart && <Icon icon={iconStart} />}
            {label && <span>{label}</span>}
            {iconEnd && <Icon icon={iconEnd} />}
        </StyledButton>
    );
};

export default Button;
