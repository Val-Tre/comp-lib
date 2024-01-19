"use client";

import { CheckboxGroupProps } from "./checkboxGroupTypes";
import {
    StyledCheckboxGroupWrapper,
    StyledCheckboxTitleWrapper,
    StyledCheckboxErrorTitleWrapper,
    StyledCheckboxesWrapper,
} from "./checkboxGroupStyles";
import Text from "../text/text";
import Icon from "../icon/icon";

const CheckboxGrup: React.FC<CheckboxGroupProps> = ({
    isDarkMode,
    isDisabled,
    isRequired,
    isInvalid,
    errorText,
    title,
    information,
    children,
}) => {
    return (
        <StyledCheckboxGroupWrapper>
            <StyledCheckboxTitleWrapper
                isDarkMode={isDarkMode}
                isDisabled={isDisabled}
            >
                <StyledCheckboxErrorTitleWrapper isInvalid={isInvalid}>
                    <div>
                        <Text textType="ui/medium/bold" text={title} />
                        {isRequired && (
                            <Text textType="ui/medium/bold" text="*" />
                        )}
                    </div>
                    {isInvalid && (
                        <div>
                            <Icon icon="IconClose" />
                            <Text
                                textType="paragraph/small/regular"
                                text={errorText}
                            />
                        </div>
                    )}
                </StyledCheckboxErrorTitleWrapper>
                <Text textType="ui/small/regular" text={information} />
            </StyledCheckboxTitleWrapper>

            <StyledCheckboxesWrapper>{children}</StyledCheckboxesWrapper>
        </StyledCheckboxGroupWrapper>
    );
};

export default CheckboxGrup;
