import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "../app/components/input/input";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Example Input",
    component: Input,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        type: {
            control: {
                type: "select",
            },
        },
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        isDarkMode: false,
        isDisabled: false,
        isInvalid: false,
        type: "text",
        label: "Label",
    },
};

export const LabelHiddenInputOnly: Story = {
    args: {
        isDarkMode: false,
        isDisabled: false,
        isInvalid: false,
        type: "text",
        label: "",
    },
};

export const WithHelpMessage: Story = {
    args: {
        isDarkMode: false,
        isDisabled: false,
        isInvalid: false,
        type: "text",
        label: "",
        text: "Helpful text to futher explain the label"
    },
};

export const Invalid: Story = {
    args: {
        isDarkMode: false,
        isDisabled: false,
        isInvalid: true,
        type: "text",
        label: "Label",
        text: "Helpful text to futher explain the label"
    },
};

export const Disabled: Story = {
    args: {
        isDarkMode: false,
        isDisabled: true,
        isInvalid: false,
        type: "text",
        label: "Label",
        text: "Helpful text to futher explain the label"
    },
};



