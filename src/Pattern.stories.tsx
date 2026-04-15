import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Hexagon from "./Hexagon/Hexagon";

import { HexGrid, Layout, Pattern } from "./"

const meta = {
    title: "Stories/Pattern",
    component: Pattern
} as Meta<typeof Pattern>

export default meta;

type Story = StoryObj<typeof Pattern>

export const Default: Story = {
    render: () => (
        <>
            <HexGrid width="100%">
                <Layout>
                    <Pattern id="my-pattern" link="https://picsum.photos/200" />
                    <Hexagon q={0} r={0} s={0} fill="my-pattern" />
                </Layout>
            </HexGrid>
        </>
    )
}