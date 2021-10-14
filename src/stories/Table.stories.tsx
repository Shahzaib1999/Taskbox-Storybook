import { ComponentStory, ComponentMeta } from "@storybook/react";

import Table from "../Components/Table/Table";

export default {
  title: "Task List",
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const List = Template.bind({});

List.args = {
  tasks: [{ title: "Default", completed: false }],
};
