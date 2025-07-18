import { ComponentStory, ComponentMeta } from "@storybook/react";
import PasswordTemplate, { IPasswordTemplate } from "./PasswordTemplate";
import { mockPasswordTemplateProps } from "./PasswordTemplate.mocks";

export default {
  title: "templates/PasswordTemplate",
  component: PasswordTemplate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PasswordTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PasswordTemplate> = (args) => (
  <PasswordTemplate {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockPasswordTemplateProps.base,
} as IPasswordTemplate;
