import React from "react";
import { Button } from "@storybook/react/demo";

export default {
  title: "Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } }
  // parameters: {
  //   actions: {
  //     handles: ["mouseover", "click"]
  //   }
  // }
};

export const Text = ({ label, ...args }) => <Button {...args}>{label}</Button>;
Text.args = {
  label: "Button"
};

export const Emoji = ({ label, ...args }) => (
  <Button {...args}>
    <span role="img" aria-label="so cool">
      {label}
    </span>
  </Button>
);
Emoji.args = {
  label: "😀 😎 👍 💯"
};
