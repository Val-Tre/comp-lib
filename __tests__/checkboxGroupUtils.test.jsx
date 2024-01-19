const {
    getDisabledTextColor,
} = require("../src/app/components/checkboxGroup/checkboxGroupUtils");
const { textColors } = require("../src/app/styles/globals");

const { describe, expect, it } = require("@jest/globals");

describe("getDisabledTextColor", () => {
    it("should return dark mode disabled text color when isDarkMode is true an isDisabled is false", () => {
        const darkModeProps = {
            isDarkMode: true,
            isDisabled: true,
        };
        expect(getDisabledTextColor(darkModeProps)).toEqual(
            textColors.darkMode.disabled
        );
    });


    it("should return undefined when isDarkMode is true an isDisabled is false", () => {
        const darkModeProps = {
            isDarkMode: true,
            isDisabled: false,
        };
        expect(getDisabledTextColor(darkModeProps)).toEqual(
            undefined
        );
    });

    it("should return light mode disabled text color when isDarkMode is false an isDisabled is false", () => {
        const darkModeProps = {
            isDarkMode: false,
            isDisabled: true,
        };
        expect(getDisabledTextColor(darkModeProps)).toEqual(
            textColors.lightMode.disabled
        );
    });

    it("should return undefined if isDarkMode is false and isDisabled is false", () => {
        const darkModeProps = {
            isDarkMode: false,
            isDisabled: false,
        };
        expect(getDisabledTextColor(darkModeProps)).toEqual(
            undefined
        );
    });


});
