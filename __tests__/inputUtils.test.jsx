const {
    getInputTextColors,
    getInputBorderColors,
    getInputBorderHoverActiveFocusedColors,
    getInputBackgroundColors,
    getInputWrapperColors,
} = require("../src/app/components/input/inputUtils");
const {
    textColors,
    borderColors,
    backgroundColors,
} = require("../src/app/styles/globals");

const { describe, expect, it } = require("@jest/globals");

describe("getInputTextColors", () => {
    it("should return dark mode text color when isDarkMode is true and isDisabled is false and isInvalid is false", () => {
        const getInputTextColorsProps = {
            isDarkMode: true,
            isDisabled: false,
            isInvalid: false,
        };
        expect(getInputTextColors(getInputTextColorsProps)).toEqual(
            textColors.darkMode.primary
        );
    });
});

describe("getInputBorderColors", () => {
    it("should return dark mode border color when isDarkMode is true and isDisabled is false and isInvalid is false", () => {
        const getInputBorderColorsProps = {
            isDarkMode: true,
            isDisabled: false,
            isInvalid: false,
        };
        expect(getInputBorderColors(getInputBorderColorsProps)).toEqual(
            borderColors.darkMode.neutral
        );
    });
});

describe("getInputBorderHoverActiveFocusedColors", () => {
    it("should return dark mode border hover active focused color when isDarkMode is true and isDisabled is false and isInvalid is false", () => {
        const getInputBorderHoverActiveFocusedColorsProps = {
            isDarkMode: true,
            isDisabled: false,
            isInvalid: false,
        };
        expect(getInputBorderHoverActiveFocusedColors(getInputBorderHoverActiveFocusedColorsProps)).toEqual(
            borderColors.darkMode.accent
        );
    });

});

describe("getInputBackgroundColors", () => {
    it("should return dark mode background color when isDarkMode is true and isDisabled is false and isInvalid is false", () => {
        const getInputBackgroundColorsProps = {
            isDarkMode: true,
            isDisabled: false,
            isInvalid: false,
        };
        expect(getInputBackgroundColors(getInputBackgroundColorsProps)).toEqual(
            backgroundColors.darkMode.neutral.default
        );
    });
});

describe("getInputWrapperColors", () => {
    it("should return dark mode input wrapper color when isDarkMode is true and isDisabled is false and isInvalid is false", () => {
        const getInputWrapperColorsProps = {
            isDarkMode: true,
            isDisabled: false,
            isInvalid: false,
        };
        expect(getInputWrapperColors(getInputWrapperColorsProps)).toEqual(
            textColors.darkMode.primary
        );
    });
});
