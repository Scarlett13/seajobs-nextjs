import { ComponentStory, ComponentMeta } from "@storybook/react";
import IdentitasDiri, { IIdentitasDiri } from "./IdentitasDiri";
// import { mockIdentitasDiriProps } from "./IdentitasDiri.mocks";

export default {
  title: "templates/IdentitasDiri",
  component: IdentitasDiri,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof IdentitasDiri>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IdentitasDiri> = (args) => (
  <IdentitasDiri {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  // ...mockIdentitasDiriProps.base,
} as IIdentitasDiri;
