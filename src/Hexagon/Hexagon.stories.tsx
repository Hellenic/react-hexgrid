import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";

import Hexagon from "./Hexagon";
import { HexGrid, GridGenerator, Hex, Layout, HexUtils } from "../"

import "../../.storybook/global.css";

const meta = {
    title: "Stories/Hexagon",
    component: Hexagon,
} satisfies Meta<typeof Hexagon>

export default meta;

type Story = StoryObj<typeof Hexagon>

export const Default: Story = {
    render: () => (
        <>
            <HexGrid width="100%">
                <Hexagon q={0} r={0} s={0} className="tutorial" />
            </HexGrid>
        </>
    )
}

export const Event: Story = {
    render: () => (
        <>
            <HexGrid width="100%">
                <Hexagon data-testid="hexOne" q={0} r={0} s={0} cellStyle={{ fill: "red", transition: "fill 0.1s" }}
                    onMouseEnter={(e: React.MouseEvent<SVGElement, MouseEvent>) =>
                        (e.target as SVGElement).style.fill = "blue"
                    }
                    onMouseLeave={(e) =>
                        (e.target as SVGElement).style.fill = "red"
                    }
                />
            </HexGrid>
        </>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const hex = await canvas.getByTestId("hexOne");
        await userEvent.hover(hex);
        expect(hex).toHaveStyle({ fill: "rgb(0,0,255)" });
    },
}

const HooksDemoComponent = () => {
    const allHexagons: Hex[] = GridGenerator.hexagon(4);
    const [hexagons, setHexagons] = useState<Hex[]>(allHexagons);
    return (
        <HexGrid width="95vw" height="95vh">
            <Layout
                size={{ x: 6, y: 6 }}
                flat={false}
                spacing={1.1}
                origin={{ x: 0, y: 0 }}
            >
                {hexagons.map((hex: Hex, i: number) => (
                    <Hexagon
                        key={i}
                        q={hex.q}
                        r={hex.r}
                        s={hex.s}
                        className={hex.props ? hex.props.className : "tutorial"}
                        onMouseOver={(_event, source) => {
                            // Set the path's end on hover

                            const targetHex = source.state.hex
                            // Color some hexagons
                            const coloredHexas = hexagons.map((hex) => {
                                hex.props = hex.props || {}
                                // Highlight tiles that are next to the target (1 distance away)
                                hex.props.className =
                                    HexUtils.distance(targetHex, hex) < 2 ? "tutorial active" : "tutorial"

                                // If the tile is on same coordinate, add class specific to the coordinate name
                                hex.props.className += targetHex.q === hex.q ? " q " : ""
                                hex.props.className += targetHex.r === hex.r ? " r " : ""
                                hex.props.className += targetHex.s === hex.s ? " s " : ""

                                return hex
                            })
                            setHexagons(coloredHexas)
                        }}
                    />
                ))}
            </Layout>
        </HexGrid >
    )
}

export const Hooks: Story = {
    render: () => <HooksDemoComponent />,
}

export const DragAndDrop: Story = {
    render: () => (
        <>
            <HexGrid width="100%" height="100%" >
                {/* drag and drop the colors! }
                {/* the drag source */}

                <Hexagon q={0} r={0} s={0} style={{ fill: "red" }}
                    onDragStart={() => { }}
                />

                {/* the drop target */}

                <Hexagon q={1} r={0} s={0} style={{ fill: "blue" }}
                    onDragStart={(e) => { e.preventDefault(); }}
                    onDragOver={(e) => { e.preventDefault(); }}
                    onDrop={(event: React.DragEvent<SVGElement>) => {
                        (event.target as SVGElement).style.fill = "red";
                        console.log("dropped!");
                    }}
                />
            </HexGrid>
        </>
    )
}
