import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Hexagon from "./Hexagon/Hexagon";

import { HexGrid, Layout, GridGenerator } from "./"

import "../.storybook/global.css";

const meta = {
    title: "Stories/Layout",
    component: Layout
} as Meta<typeof Layout>

export default meta;

type Story = StoryObj<typeof Layout>

export const Pointy: Story = {
    render: () => (
        <>
            <HexGrid width="100%">
                <Layout flat={false}>
                    {GridGenerator.hexagon(2).map((hex, i) => (
                        <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} className="tutorial" />
                    ))}
                </Layout>
            </HexGrid>
        </>
    )
}

export const Spacing: Story = {
    render: () => (
        <>
            <HexGrid width="100%">
                <Layout spacing={1.1}>
                    {GridGenerator.hexagon(2).map((hex, i) => (
                        <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} className="tutorial" />
                    ))}
                </Layout>
            </HexGrid >
        </>
    )
}