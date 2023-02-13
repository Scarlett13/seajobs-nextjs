import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputTemplate, { IInputTemplate } from "./InputTemplate";
import { mockInputTemplateProps } from "./InputTemplate.mocks";

export default {
  title: "templates/InputTemplate",
  component: InputTemplate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof InputTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputTemplate> = (args) => (
  <InputTemplate {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockInputTemplateProps.base,
} as IInputTemplate;
