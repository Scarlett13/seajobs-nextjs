import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextArea, { ITextArea } from "./TextArea";
import { mockTextAreaProps } from "./TextArea.mocks";

export default {
  title: "templates/TextArea",
  component: TextArea,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TextArea>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockTextAreaProps.base,
} as ITextArea;
