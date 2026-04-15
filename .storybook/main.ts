import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../docs/GettingStarted/1. Introduction.mdx",
    "../docs/GettingStarted/2. YourFirstApp.mdx",
    "../docs/GettingStarted/3. UsingGenerators.mdx",
    "../docs/GettingStarted/4. UsingLayout.mdx",
    "../docs/GettingStarted/5. UsingPattern.mdx",
    "../docs/GettingStarted/6. UsingPath.mdx",
    "../docs/GettingStarted/7. UsingEvents.mdx",
    //"../docs/AdvancedExamples/1. DraggingAndDropping.mdx",
    "../docs/AdvancedExamples/1. UsingHooks.mdx",
    "../src/**/*.stories.tsx",
    "../docs/Hero/Hero.stories.tsx",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-webpack5-compiler-swc",
    "@chromatic-com/storybook",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};
export default config;


