import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Hero from "./Hero"

const meta = {
    title: "Stories/Hero",
} satisfies Meta<typeof Hero>

export default meta;

type Story = StoryObj<typeof Hero>

export const Default: Story = {
    render: () => (
        <Hero />
    )
}

