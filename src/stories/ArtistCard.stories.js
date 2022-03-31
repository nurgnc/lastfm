import React from "react";
import { ArtistCard } from "../components";

export default {
  title: "Artist Card",
  component: ArtistCard,
  argTypes: {
    args: { control: " " },
  },
};

const Template = (args) => <ArtistCard {...args} />;

export const Card = () => Template.bind({});
Card.args = {
  name: "Taylor Swift",
  playcount: "155630",
  listeners: "164656",
};
