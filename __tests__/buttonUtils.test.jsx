const {
    getButtonBorderColors,
    getButtonHoverBorderColors,
    getButtonActiveBorderColors,
    getButtonColors,
    getButtonHoverColors,
    getButtonActiveColors,
    getButtonBackgroundColors,
    getButtonHoverBackgroundColors,
    getButtonActiveBackgroundColors,
    getButtonIconFillColor,
    getButtonHoverIconFillColor,
    getButtonActiveIconFillColor,
} = require("../src/app/components/button/buttonUtils");
const {
    borderColors,
    backgroundColors,
    textColors,
} = require("../src/app/styles/globals");

const { describe, expect, it } = require("@jest/globals");

describe("getButtonBorderColors", () => {
    it("should return dark mode button border color when isDarkMode is true", () => {
        const getButtonBorderColorsProps = {
            isDarkMode: true,
            isDisabled: false,
            priority: "primary",
        };
        expect(getButtonBorderColors(getButtonBorderColorsProps)).toEqual(
            backgroundColors.darkMode.accent.default
        );
    });

    it("should return light mode button border color when isDarkMode is false", () => {
        const getButtonBorderColorsProps = {
            isDarkMode: false,
            isDisabled: false,
            priority: "primary",
        };
        expect(getButtonBorderColors(getButtonBorderColorsProps)).toEqual(
            backgroundColors.lightMode.accent.default
        );
    });

    it("should return dark mode neutral button border color when isDarkMode is true and isDisabled is true", () => {
        const getButtonBorderColorsProps = {
            isDarkMode: true,
            isDisabled: true,
            priority: "primary",
        };
        expect(getButtonBorderColors(getButtonBorderColorsProps)).toEqual(
            borderColors.darkMode.neutral
        );
    });

    it("should return light mode neutral button border color when isDarkMode is false and isDisabled is true", () => {
        const getButtonBorderColorsProps = {
            isDarkMode: false,
            isDisabled: true,
            priority: "primary",
        };
        expect(getButtonBorderColors(getButtonBorderColorsProps)).toEqual(
            borderColors.lightMode.neutral
        );
    });

    it("should return dark mode app button border color when isDarkMode is true and priority is secondary", () => {
        const getButtonBorderColorsProps = {
            isDarkMode: true,
            isDisabled: false,
            priority: "secondary",
        };
        expect(getButtonBorderColors(getButtonBorderColorsProps)).toEqual(
            borderColors.darkMode.app
        );
    });

    it("should return light mode app button border color when isDarkMode is false and priority is secondary", () => {
        const getButtonBorderColorsProps = {
            isDarkMode: false,
            isDisabled: false,
            priority: "secondary",
        };
        expect(getButtonBorderColors(getButtonBorderColorsProps)).toEqual(
            borderColors.lightMode.app
        );
    });

    it("should return transparent button border color when priority is tretiary", () => {
        const getButtonBorderColorsProps = {
            isDarkMode: true,
            isDisabled: false,
            priority: "tretiary",
        };
        expect(getButtonBorderColors(getButtonBorderColorsProps)).toEqual("transparent");
    });
});

describe("getButtonHoverBorderColors", () => {
    it("should return dark mode button hover border color when isDarkMode is true", () => {
        const getButtonHoverBorderColorsProps = {
            isDarkMode: true,
            isDisabled: false,
            priority: "primary",
        };
        expect(getButtonHoverBorderColors(getButtonHoverBorderColorsProps)).toEqual(
            backgroundColors.darkMode.accent.hover
        );
    });
});

describe("getButtonActiveBorderColors", () => {
    it("should return dark mode button active border color when isDarkMode is true", () => {
        const getButtonActiveBorderColorsProps = {
            isDarkMode: true,
            isDisabled: false,
            priority: "primary",
        };
        expect(getButtonActiveBorderColors(getButtonActiveBorderColorsProps)).toEqual(
            backgroundColors.darkMode.accent.active
        );
    });
});

describe("getButtonColors", () => {
    it("should return dark mode button color when isDarkMode is true", () => {
        const getButtonColorsProps = {
            isDarkMode: true,
            isDisabled: false,
            priority: "primary",
        };
        expect(getButtonColors(getButtonColorsProps)).toEqual(
            textColors.darkMode.inverse
        );
    });
});

describe("getButtonHoverColors", () => {
    it("should return dark mode button hover color when isDarkMode is true", () => {
        const getButtonHoverColorsProps = {
            isDarkMode: true,
            isDisabled: false,
            priority: "primary",
        };
        expect(getButtonHoverColors(getButtonHoverColorsProps)).toEqual(
            textColors.darkMode.inverse
        );
    });
});

describe("getButtonActiveColors", () => {
    it("should return dark mode button active color when isDarkMode is true", () => {
        const getButtonActiveColorsProps = {
            isDarkMode: true,
            isDisabled: false,
            priority: "primary",
        };
        expect(getButtonActiveColors(getButtonActiveColorsProps)).toEqual(
            textColors.darkMode.inverse
        );
    });
});

describe("getButtonBackgroundColors", () => {
    it("should return dark mode button background color when isDarkMode is true", () => {
        const getButtonBackgroundColorsProps = {
            isDarkMode: true,
            isDisabled: false,
            priority: "primary",
        };
        expect(getButtonBackgroundColors(getButtonBackgroundColorsProps)).toEqual(
            backgroundColors.darkMode.accent.default
        );
    });
});

describe("getButtonHoverBackgroundColors", () => {
    it("should return dark mode button hover background color when isDarkMode is true", () => {
        const getButtonHoverBackgroundColorsProps = {
            isDarkMode: true,
            isDisabled: false,
            priority: "primary",
        };
        expect(getButtonHoverBackgroundColors(getButtonHoverBackgroundColorsProps)).toEqual(
            backgroundColors.darkMode.accent.hover
        );
    });
});

describe("getButtonActiveBackgroundColors", () => {
    it("should return dark mode button active background color when isDarkMode is true", () => {
        const getButtonActiveBackgroundColorsProps = {
            isDarkMode: true,
            isDisabled: false,
            priority: "primary",
        };
        expect(getButtonActiveBackgroundColors(getButtonActiveBackgroundColorsProps)).toEqual(
            backgroundColors.darkMode.accent.active
        );
    });
});

describe("getButtonIconFillColor", () => {
    it("should return dark mode button icon fill color when isDarkMode is true", () => {
        const getButtonIconFillColorProps = {
            isDarkMode: true,
            isDisabled: false,
            priority: "primary",
        };
        expect(getButtonIconFillColor(getButtonIconFillColorProps)).toEqual(
            textColors.darkMode.inverse
        );
    });
});

describe("getButtonHoverIconFillColor", () => {
    it("should return dark mode button hover icon fill when isDarkMode is true", () => {
        const getButtonHoverIconFillColorProps = {
            isDarkMode: true,
            isDisabled: false,
            priority: "primary",
        };
        expect(getButtonHoverIconFillColor(getButtonHoverIconFillColorProps)).toEqual(
            textColors.darkMode.inverse
        );
    });
});

describe("getButtonActiveIconFillColor", () => {
    it("should return dark mode button active icon fill color when isDarkMode is true", () => {
        const getButtonActiveIconFillColorProps = {
            isDarkMode: true,
            isDisabled: false,
            priority: "primary",
        };
        expect(getButtonActiveIconFillColor(getButtonActiveIconFillColorProps)).toEqual(
            textColors.darkMode.inverse
        );
    });
});
