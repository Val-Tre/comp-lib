"use client";

import React, { ChangeEvent, useState } from "react";
import { InputProps } from "./inputTypes";
import { StyledInputWrapper, StyledInput } from "./inputStyles";
import Text from "../text/text";
import Icon from "../icon/icon";

export const Input: React.FC<InputProps> = ({
    isDarkMode,
    isDisabled,
    isInvalid,
    type,
    label,
    text,
}) => {
    const [inputValue, setInputValue] = useState<string>("");

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <StyledInputWrapper
            isDarkMode={isDarkMode}
            isDisabled={isDisabled}
            isInvalid={isInvalid}
        >
            {label && <Text textType="ui/medium/bold" text={label} />}

            <StyledInput
                isDarkMode={isDarkMode}
                isDisabled={isDisabled}
                isInvalid={isInvalid}
                type={type}
                value={inputValue}
                onChange={handleInputChange}
                placeholder={`Enter ${label}`}
                name={label}
            />

            {text && (
                <div>
                    {isInvalid && <Icon icon="IconClose" />}
                    <Text textType="paragraph/small/regular" text={text} />
                </div>
            )}
        </StyledInputWrapper>
    );
};

export default Input;
