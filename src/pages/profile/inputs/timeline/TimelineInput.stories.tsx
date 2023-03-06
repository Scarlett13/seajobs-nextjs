import { ComponentStory, ComponentMeta } from "@storybook/react";
import TimelineInput, { ITimelineInput } from "./TimelineInput";
import { mockTimelineInputProps } from "./TimelineInput.mocks";

export default {
  title: "templates/TimelineInput",
  component: TimelineInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TimelineInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TimelineInput> = (args) => (
  <TimelineInput {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockTimelineInputProps.base,
} as ITimelineInput;
