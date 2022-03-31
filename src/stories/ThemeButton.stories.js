import React from "react";
import { ThemeButton } from "../components";

export default {
  title: "Theme Button",
  component: ThemeButton,
  argTypes: {
    variant: {
      options: ["dark", "light"],
      control: { type: "button" },
    },
  },
};

const Template = (args) => <ThemeButton {...args} />;

export const Dark = () => Template.bind({});
Dark.args = {
  variant: "dark",
};

export const Light = () => Template.bind({});
Light.args = {
  variant: "light",
};
