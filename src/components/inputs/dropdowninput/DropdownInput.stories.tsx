import { ComponentStory, ComponentMeta } from "@storybook/react";
import DropdownInput, { IDropdownInput } from "./DropdownInput";
import { mockDropdownInputProps } from "./DropdownInput.mocks";

export default {
  title: "templates/DropdownInput",
  component: DropdownInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof DropdownInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DropdownInput> = (args) => (
  <DropdownInput {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockDropdownInputProps.base,
} as IDropdownInput;
