import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "../app/components/checkbox/checkbox";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Example Checkbox",
    component: Checkbox,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Unchecked: Story = {
    args: {
        isDarkMode: false,
        isDisabled: false,
        isChecked: false,
        label: "Label",
        text: "Contextual help message",
    },
};

export const UncheckedDisabled: Story = {
    args: {
        isDarkMode: false,
        isDisabled: true,
        isChecked: false,
        label: "Label",
        text: "Contextual help message",
    },
};

export const Checked: Story = {
    args: {
        isDarkMode: false,
        isDisabled: false,
        isChecked: true,
        label: "Label",
        text: "Contextual help message",
    },
};

export const CheckedDisabled: Story = {
    args: {
        isDarkMode: false,
        isDisabled: true,
        isChecked: true,
        label: "Label",
        text: "Contextual help message",
    },
};
