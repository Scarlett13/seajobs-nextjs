import { ComponentStory, ComponentMeta } from "@storybook/react";
import TimelinePengalaman, { ITimelinePengalaman } from "./TimelinePengalaman";
// import { mockTimelinePengalamanProps } from "./TimelinePengalaman.mocks";

export default {
  title: "templates/TimelinePengalaman",
  component: TimelinePengalaman,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TimelinePengalaman>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TimelinePengalaman> = (args) => (
  <TimelinePengalaman {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  // ...mockTimelinePengalamanProps.base,
} as ITimelinePengalaman;
