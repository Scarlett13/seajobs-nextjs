import { ComponentStory, ComponentMeta } from "@storybook/react";
import InfoKontak, { IInfoKontak } from "./InfoKontak";
// import { mockInfoKontakProps } from "./InfoKontak.mocks";

export default {
  title: "templates/InfoKontak",
  component: InfoKontak,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof InfoKontak>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InfoKontak> = (args) => (
  <InfoKontak {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  // ...mockInfoKontakProps.base,
} as IInfoKontak;
