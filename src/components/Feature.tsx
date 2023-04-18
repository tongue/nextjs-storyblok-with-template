import { storyblokEditable } from "@storyblok/react";

const Feature = ({ blok }: any) => (
  <div className="column feature" {...storyblokEditable(blok)}>
    {blok.name}
    <p>{blok.description}</p>
  </div>
);

export default Feature;
