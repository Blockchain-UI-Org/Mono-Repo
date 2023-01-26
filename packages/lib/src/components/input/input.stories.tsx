import React from "react";
import { Story, Meta } from "@storybook/react";
import { Input, InputProps } from "./input";

export default {
  component: Input,
  title: "Pending/Atoms/Input",
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args}></Input>;

export const Basic = Template.bind({});

Basic.args = {
  label: "Label",
};

export const Error = Template.bind({});

Error.args = {
  label: "Label",
  error: "Error Message",
  errorAction: {
    onClick: () => {
      alert("clicked");
    },
    text: "Take action",
  },
};
