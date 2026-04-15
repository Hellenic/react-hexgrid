import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import {
  HexGrid,
  Layout,
  Hexagon,
  GridGenerator,
  Text,
  Path,
  Pattern,
  Hex,
} from "../..";

import type { HexagonProps } from "../../Hexagon/Hexagon";

export default {
  title: "CustomGrid",
  component: HexGrid,
  argTypes: {},
} as Meta<typeof Hexagon>;

const hexagonSize = { x: 10, y: 10 };
const moreHexas: Hex[] = GridGenerator.parallelogram(-2, 2, -2, 2);
const plainHexCoords: Hex[] = [
  { q: 0, r: 0, s: 0 },
  { q: 0, r: 1, s: -1 },
  { q: 1, r: -1, s: 0 },
  { q: 1, r: 0, s: -1 },
  { q: -1, r: 0, s: 1 },
  { q: -2, r: 0, s: 1 },
];

type HexagonPropsExtended = Omit<HexagonProps, "q" | "r" | "s"> & {
  strokeWidth?: string;
  stroke?: string;
};

const hexagonStyleAndEventProps: HexagonPropsExtended = {
  strokeWidth: "0.2",
  stroke: "#7be3f6",
  cellStyle: {
    fill: "rgba(123,227,246, 0.7)",
    transition: "fill-opacity 0.5s",
  },
  onMouseEnter: (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    (e.target as SVGElement).setAttribute("fill-opacity", "0.1");
  },
  onMouseLeave: (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    (e.target as SVGElement).setAttribute("fill-opacity", "1");
  },
};

const Template: StoryFn<typeof Hexagon> = () => {
  return (
    <div
      style={{
        background: "#133b43",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>React Hexgrid v1</h2>
      <p>
        Constructing Hexgrid with component-based approach with custom SVG
        elements.
      </p>
      <HexGrid width={1200} height={800} viewBox="-50 -50 100 100">
        {/* Main grid with bit hexagons, all manual */}
        <Layout
          size={hexagonSize}
          flat={true}
          spacing={1.1}
          origin={{ x: 0, y: 0 }}
        >
          {plainHexCoords.map((hex, i) => (
            <Hexagon
              key={i}
              q={hex.q}
              r={hex.r}
              s={hex.s}
              {...hexagonStyleAndEventProps}
            >
              <Text
                fontSize="0.22em"
                fill="white"
                fillOpacity="0.7"
                style={{ transition: "fill-opacity 0.5s" }}
              >{`${hex.q},${hex.r},${hex.s}`}</Text>
            </Hexagon>
          ))}

          <Path
            stroke="#7be3f6"
            strokeWidth="0.2em"
            strokeOpacity="0.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            start={new Hex(0, 0, 0)}
            end={new Hex(-2, 0, 1)}
          />
          <Hexagon q={0} r={-1} s={1} fill="pat-1" />
          <Hexagon q={-1} r={1} s={0} fill="pat-2" />
        </Layout>
        {/* Additional small grid, hexagons generated with generator */}
        <Layout size={{ x: 2, y: 2 }} origin={{ x: 50, y: -30 }}>
          {moreHexas.map((hex, i) => (
            <Hexagon
              key={i}
              q={hex.q}
              r={hex.r}
              s={hex.s}
              {...hexagonStyleAndEventProps}
            />
          ))}
        </Layout>
        {/* You can define multiple patterns and switch between them with "fill" prop on Hexagon */}
        <Pattern
          id="pat-1"
          link="https://picsum.photos/id/1048/100"
          size={hexagonSize}
        />
        <Pattern
          id="pat-2"
          link="https://picsum.photos/id/1051/100"
          //   link="http://lorempixel.com/400/400/cats/2/"
          size={hexagonSize}
        />
        <g fillOpacity="0.6" fill={"#4499a9"}>
          <circle cx="50" cy="0" r="10" />
          <circle cx="50" cy="10" r="8" />
          <circle cx="45" cy="20" r="6" />
        </g>
      </HexGrid>
    </div>
  );
};

export const Default = Template.bind({});
