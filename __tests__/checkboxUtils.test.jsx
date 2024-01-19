const {
    getCheckboxBorderColors,
    getCheckboxHoverBorderColors,
    getCheckboxActiveBorderColors,
    getCheckboxBackgroundColors,
    getCheckboxHoverBackgroundColors,
    getCheckboxActiveBackgroundColors,
    getCheckboxIconColors,
} = require("../src/app/components/checkbox/checkboxUtils");
const {
    textColors,
    borderColors,
    backgroundColors,
} = require("../src/app/styles/globals");

const { describe, expect, it } = require("@jest/globals");

describe("getCheckboxBorderColors", () => {
    it("should return dark mode checkbox border color when isDarkMode is true and isDisabled is false and isInvalid is false and checked is false", () => {
        const getCheckboxBorderColorssProps = {
            isDarkMode: true,
            isDisabled: false,
            checked: false,
        };
        expect(getCheckboxBorderColors(getCheckboxBorderColorssProps)).toEqual(
            borderColors.darkMode.neutral
        );
    });

    it("should return dark mode checkbox border color when isDarkMode is true and isDisabled is false and isInvalid is false and checked is true", () => {
        const getCheckboxBorderColorsProps = {
            isDarkMode: true,
            isDisabled: false,
            checked: true,
        };
        expect(getCheckboxBorderColors(getCheckboxBorderColorsProps)).toEqual(
            backgroundColors.darkMode.accent.default
        );
    });

});

describe("getCheckboxHoverBorderColors", () => {
    it("should return dark mode checkbox hover border color when isDarkMode is true and isDisabled is false and isInvalid is false and checked is false", () => {
        const getCheckboxHoverBorderColorsProps = {
            isDarkMode: true,
            isDisabled: false,
            checked: false,
        };
        expect(getCheckboxHoverBorderColors(getCheckboxHoverBorderColorsProps)).toEqual(
            borderColors.darkMode.accent
        );
    });
});

describe("getCheckboxActiveBorderColors", () => {
    it("should return dark mode checkbox active border color when isDarkMode is true and isDisabled is false and isInvalid is false and checked is false", () => {
        const getCheckboxActiveBorderColorsProps = {
            isDarkMode: true,
            isDisabled: false,
            checked: false,
        };
        expect(getCheckboxActiveBorderColors(getCheckboxActiveBorderColorsProps)).toEqual(
            borderColors.darkMode.accent
        );
    });
});

describe("getCheckboxBackgroundColors", () => {
    it("should return dark mode checkbox background color when isDarkMode is true and isDisabled is false and isInvalid is false and checked is false", () => {
        const getCheckboxBackgroundColorsProps = {
            isDarkMode: true,
            isDisabled: false,
            checked: false,
        };
        expect(getCheckboxBackgroundColors(getCheckboxBackgroundColorsProps)).toEqual(
            backgroundColors.darkMode.neutral.default
        );
    });
});

describe("getCheckboxHoverBackgroundColors", () => {
    it("should return dark mode checkbox hover background color when isDarkMode is true and isDisabled is false and isInvalid is false and checked is false", () => {
        const getCheckboxHoverBackgroundColorsProps = {
            isDarkMode: true,
            isDisabled: false,
            checked: false,
        };
        expect(getCheckboxHoverBackgroundColors(getCheckboxHoverBackgroundColorsProps)).toEqual(
            backgroundColors.darkMode.neutral.default
        );
    });
});

describe("getCheckboxActiveBackgroundColors", () => {
    it("should return dark mode checkbox active background color when isDarkMode is true and isDisabled is false and isInvalid is false and checked is false", () => {
        const getCheckboxActiveBackgroundColorsProps = {
            isDarkMode: true,
            isDisabled: false,
            checked: false,
        };
        expect(getCheckboxActiveBackgroundColors(getCheckboxActiveBackgroundColorsProps)).toEqual(
            backgroundColors.darkMode.neutral.active
        );
    });
});

describe("getCheckboxIconColors", () => {
    it("should return dark mode checkbox icon color when isDarkMode is true and isDisabled is false and isInvalid is false and checked is false", () => {
        const getCheckboxIconColorsProps = {
            isDarkMode: true,
            isDisabled: false,
            checked: false,
        };
        expect(getCheckboxIconColors(getCheckboxIconColorsProps)).toEqual(
            "transparent"
        );
    });
});