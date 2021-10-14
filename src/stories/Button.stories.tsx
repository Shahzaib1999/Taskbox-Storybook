import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { IoIosAlarm } from "react-icons/io";

import Button from "../Components/Button/Button";
import "./Button.css";

export default {
  title: "Button",
  component: Button,

  argTypes: {
    classes: {
      options: ["btn-primary", "btn-success", "btn-warning", "btn-danger"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Default",
  onClick: () => {},
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  title: "Icon",
  onClick: () => {},
  icon: <IoIosAlarm />,
};

export const WithStyling = Template.bind({});
WithStyling.args = {
  title: "Styling",
  onClick: () => {},
  classes: "btn-success",
};
