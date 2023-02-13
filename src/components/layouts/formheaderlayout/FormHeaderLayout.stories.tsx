import { ComponentMeta, ComponentStory } from "@storybook/react";
import FormHeaderLayout, { IFormHeaderLayout } from "./FormHeaderLayout";
import { mockFormHeaderLayoutProps } from "./FormHeaderLayout.mocks";

export default {
  title: "layouts/FormHeaderLayout",
  component: FormHeaderLayout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FormHeaderLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormHeaderLayout> = (args) => (
  <FormHeaderLayout {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFormHeaderLayoutProps.base,
} as IFormHeaderLayout;
