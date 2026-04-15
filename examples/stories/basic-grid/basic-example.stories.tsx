import React, { useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { HexGrid, Layout, Hexagon, GridGenerator, Hex } from "../..";

const meta = {
  title: "A/Basic",
  component: Hexagon,
  tags: ["!autodocs"],
} satisfies Meta<typeof Hexagon>;

export default meta;

//parallelogram: q1 -> q2, r1 -> r2
const hexagons: Hex[] = GridGenerator.parallelogram(0, 1, 0, 1);

//https://storybook.js.org/docs/6/writing-tests/interaction-testing
const Template: StoryFn<typeof Hexagon> = () => {
  return (
    <div className="basic-example">
      <h1 style={{ fontFamily: "sans-serif" }}>
        Basic example of HexGrid usage.
      </h1>
      <HexGrid>
        <Layout>
          {hexagons.map((hex, i) => (
            <Hexagon
              key={i}
              q={hex.q}
              r={hex.r}
              s={hex.s}
              strokeWidth="0.2"
              stroke="#3f51b5"
              cellStyle={{
                fill: "rgba(63,81,181, 0.6)",
                transition: "fill-opacity 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.target as SVGElement).setAttribute("fill-opacity", "0.6")
              }
              onMouseLeave={(e) =>
                (e.target as SVGElement).setAttribute("fill-opacity", "1")
              }
            />
          ))}
        </Layout>
      </HexGrid>
    </div>
  );
};

export const Default: StoryFn<typeof Hexagon> = Template.bind({});
