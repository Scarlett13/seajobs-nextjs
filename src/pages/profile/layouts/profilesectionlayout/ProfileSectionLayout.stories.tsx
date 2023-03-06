import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProfileSectionLayout, {
  IProfileSectionLayout,
} from "./ProfileSectionLayout";
import { mockProfileSectionLayoutProps } from "./ProfileSectionLayout.mocks";

export default {
  title: "templates/ProfileSectionLayout",
  component: ProfileSectionLayout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ProfileSectionLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProfileSectionLayout> = (args) => (
  <ProfileSectionLayout {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockProfileSectionLayoutProps.base,
} as IProfileSectionLayout;
