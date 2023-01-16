import Button from "../components/Button";
import { Meta, StoryFn } from "@storybook/react";
export default {
  // Folder Routing
  // Folder / Folder
  title: "Components/Buttons",
  component: Button,
  argTypes: {
    handleClick: { action: "logging it in action section" },
  },
} as Meta<typeof Button>;

// Let Story === Single Component
// We Create A Template Here So We Can Create Multiple Stories
const Story: StoryFn = (args: any) => <Button {...args}>{args.label}</Button>;

// Define Variation Named "Default"
// Bind "Default" Component To Our Template
export const Default = Story.bind({});
// Create Another Variation
export const Secondary = Story.bind({});

// Parameters To Add
Default.args = {
  label: "baby",
  className: "",
};

Secondary.args = {
  label: "brotha",
  className: "bg-blue-400",
};
