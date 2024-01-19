import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../app/components/button/button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Example Button",
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        priority: {
            control: {
                type: "select",
                options: ["primary", "secondary", "tertiary"],
            },
        },
        iconStart: {
            control: {
                type: "select",
            },
        },
        iconEnd: {
          control: {
              type: "select",
          },
      },

    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        priority: "primary",
        label: "Button",
        isDarkMode: false,
        isDisabled: false,
    },
};

export const Secondary: Story = {
    args: {
        priority: "secondary",
        label: "Button",
        isDarkMode: false,
        isDisabled: false,
    },
};

export const Tretiary: Story = {
    args: {
        priority: "tretiary",
        label: "Button",
        isDarkMode: false,
        isDisabled: false,
    },
};
