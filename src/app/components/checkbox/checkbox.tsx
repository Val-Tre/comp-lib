"use client";

import { CheckboxProps } from "./checkboxTypes";
import {
    StyledCheckboxWrapper,
    StyledCheckbox,
    StyledTextWrapper,
} from "./checkboxStyles";
import Text from "../text/text";
import Icon from "../icon/icon";
import { textColors } from "../../styles/globals";
import { useState } from "react";

export const Checkbox: React.FC<CheckboxProps> = ({
    isDarkMode,
    isDisabled,
    isChecked,
    label,
    text,
}) => {
    const [thisIsChecked, setThisIsChecked] = useState(
        isChecked ? true : false
    );

    const checkHandler = () => {
        if (isDisabled) {
            return;
        }

        setThisIsChecked(!thisIsChecked);
    };

    return (
        <StyledCheckboxWrapper>
            <div>
                <input
                    type="checkbox"
                    id={`checkbox-${text.toLowerCase().replace(/\s/g, "")}`}
                    disabled={isDisabled}
                    checked={thisIsChecked}
                    onChange={checkHandler}
                    style={{ display: "none" }}
                    name={label}
                />

                <StyledCheckbox
                    isDarkMode={isDarkMode}
                    isDisabled={isDisabled}
                    checked={thisIsChecked}
                    onClick={checkHandler}
                >
                    {thisIsChecked && (
                        <Icon icon="IconDone"/>
                    )}
                </StyledCheckbox>

                {label && (
                    <label
                        onClick={checkHandler}
                        htmlFor={`checkbox-${label
                            .toLowerCase()
                            .replace(/\s/g, "")}`}
                    >
                        <Text
                            textType="ui/medium/bold"
                            text={label}
                            customColor={
                                isDisabled === true
                                    ? textColors.lightMode.disabled
                                    : ""
                            }
                        />
                    </label>
                )}
            </div>
            {text && (
                <StyledTextWrapper>
                    <Text
                        textType="paragraph/small/regular"
                        text={text}
                        customColor={
                            isDisabled === true
                                ? textColors.lightMode.disabled
                                : ""
                        }
                    />
                </StyledTextWrapper>
            )}
        </StyledCheckboxWrapper>
    );
};

export default Checkbox;
