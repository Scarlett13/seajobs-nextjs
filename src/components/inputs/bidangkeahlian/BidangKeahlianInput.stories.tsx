import { ComponentStory, ComponentMeta } from "@storybook/react";
import BidangKeahlianInput, {
  IBidangKeahlianInput,
} from "./BidangKeahlianInput";
import { mockBidangKeahlianInputProps } from "./BidangKeahlianInput.mocks";

export default {
  title: "templates/BidangKeahlianInput",
  component: BidangKeahlianInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BidangKeahlianInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BidangKeahlianInput> = (args) => (
  <BidangKeahlianInput {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBidangKeahlianInputProps.base,
} as IBidangKeahlianInput;
