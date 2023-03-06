import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProfileMainLayout, { IProfileMainLayout } from "./ProfileMainLayout";
import { mockProfileMainLayoutProps } from "./ProfileMainLayout.mocks";

export default {
  title: "templates/ProfileMainLayout",
  component: ProfileMainLayout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ProfileMainLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProfileMainLayout> = (args) => (
  <ProfileMainLayout {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockProfileMainLayoutProps.base,
} as IProfileMainLayout;
