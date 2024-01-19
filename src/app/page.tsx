"use client";

import { useState } from "react";

import Main from "./components/main/main";
import Header from "./components/header/header";
import Form from "./components/form/form";
import Text from "./components/text/text";
import Input from "./components/input/input";
import Button from "./components/button/button";
import Checkbox from "./components/checkbox/checkbox";
import CheckboxGrup from "./components/checkboxGroup/checkboxGroup";
import {
    VerticalGap8,
    CenteredText,
} from "./components/commonStyledComponents/commonStyledComponents";

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);

    // Change theme light/dark
    const handleDarkModeToggle = () => {
        setDarkMode((prevDarkMode) => !prevDarkMode);
    };

    return (
        <Main isDarkMode={darkMode}>
            <Header
                isDarkMode={darkMode}
                onButtonClick={handleDarkModeToggle}
            />

            <Form isDarkMode={darkMode}>
                <div>
                    <Text
                        textType="display/medium"
                        text="Welcome to Componento!"
                    />
                    <Text
                        textType="paragraph/medium/regular"
                        text="Let's get started with creating your account"
                    />
                </div>

                <VerticalGap8>
                    <Input
                        isDarkMode={darkMode}
                        isInvalid={true}
                        isDisabled={false}
                        type="email"
                        label="Email"
                        text="Top-level domain is either missing or incorrect"
                    />
                    <Input
                        isDarkMode={darkMode}
                        isInvalid={false}
                        isDisabled={false}
                        type="password"
                        label="Password"
                        text="Create a strong password with a mix of letters, numbers and symbols"
                    />
                </VerticalGap8>
                <div>
                    <CheckboxGrup
                        isDarkMode={darkMode}
                        isDisabled={false}
                        isRequired={false}
                        isInvalid={true}
                        errorText="You need to agree with term and conditionse"
                        title="Additional"
                        information="Group information text"
                    >
                        <Checkbox
                            isDarkMode={darkMode}
                            isDisabled={false}
                            label="Send me useless newsletters please"
                            text="Our marketers will thank you, every day"
                            isChecked={true}
                        />
                        <Checkbox
                            isDarkMode={darkMode}
                            isDisabled={false}
                            label="I agree with terms and conditions"
                            text="Contextual help message"
                            isChecked={false}
                        />
                    </CheckboxGrup>
                </div>
                <VerticalGap8>
                    <Button
                        isDarkMode={darkMode}
                        priority="primary"
                        isDisabled={false}
                        label="Sign in"
                        onClick={handleDarkModeToggle}
                    />
                    <CenteredText>
                        <Text textType="ui/small/regular" text="or" />
                    </CenteredText>
                    <Button
                        isDarkMode={darkMode}
                        priority="tretiary"
                        isDisabled={false}
                        label="Create account"
                        onClick={handleDarkModeToggle}
                    />
                </VerticalGap8>
            </Form>
        </Main>
    );
}
