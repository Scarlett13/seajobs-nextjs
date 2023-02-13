import { ComponentStory, ComponentMeta } from "@storybook/react";
import MainCtaButton, { IMainCtaButton } from "./MainCtaButton";
import { mockMainCtaButtonProps } from "./MainCtaButton.mocks";

export default {
  title: "templates/MainCtaButton",
  component: MainCtaButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MainCtaButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MainCtaButton> = (args) => (
  <MainCtaButton {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockMainCtaButtonProps.base,
} as IMainCtaButton;
