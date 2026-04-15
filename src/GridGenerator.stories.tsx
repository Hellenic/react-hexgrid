import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Hexagon from "./Hexagon/Hexagon";
import { HexGrid, GridGenerator } from "./"

import "../.storybook/global.css";

const meta = {
    title: "Stories/GridGenerator",
} satisfies Meta<typeof GridGenerator>

export default meta;

type Story = StoryObj<typeof GridGenerator>

export const Default: Story = {
    render: () => (
        <>
            <HexGrid width="100%">
                {GridGenerator.hexagon(2).map((hex, i) => (
                    <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} className="tutorial" />
                ))}
            </HexGrid>
        </>
    )
}

