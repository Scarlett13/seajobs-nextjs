import { ComponentStory, ComponentMeta } from "@storybook/react";
import DeskripsiDiri, { IDeskripsiDiri } from "./DeskripsiDiri";
// import { mockDeskripsiDiriProps } from "./DeskripsiDiri.mocks";

export default {
  title: "templates/DeskripsiDiri",
  component: DeskripsiDiri,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof DeskripsiDiri>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DeskripsiDiri> = (args) => (
  <DeskripsiDiri {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  // ...mockDeskripsiDiriProps.base,
} as IDeskripsiDiri;
