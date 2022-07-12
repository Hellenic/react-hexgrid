import * as React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import {
  HexGrid,
  Layout,
  Hexagon as H,
  GridGenerator,
  Text as T,
  Path as P,
  Pattern,
  Hex,
} from "../.."
import { css, jsx } from "@emotion/react"
import styled from "@emotion/styled"

export default {
  title: "CustomGrid",
  component: HexGrid,
  argTypes: {},
} as ComponentMeta<typeof H>

const hexagonSize = { x: 10, y: 10 }
const moreHexas = GridGenerator.parallelogram(-2, 2, -2, 2)

const Hexagon = styled(H)`
  stroke: #7be3f6;
  stroke-width: 0.2;
  transition: fill-opacity 0.5s;
  &:hover {
    fill: #7be3f6;
    fill-opacity: 0.7;
  }
`

const Text = styled(T)`
  font-size: 0.22em;
  fill: white;
  fill-opacity: 0.7;
  transition: fill-opacity 0.5s;
`

const Path = styled(P)`
  fill: none;
  stroke: #7be3f6;
  stroke-width: 0.2em;
  stroke-opacity: 0.7;
  stroke-linecap: round;
  stroke-linejoin: round;
`

const Template: ComponentStory<typeof H> = (args, { argTypes }) => {
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
          css={css`
            fill: #4499a9;
            fill-opacity: 0.6;
          `}
        >
          <Hexagon q={0} r={0} s={0} />
          {/* Using pattern (defined below) to fill the hexagon */}
          <Hexagon q={0} r={-1} s={1} fill="pat-1" />
          <Hexagon q={0} r={1} s={-1} />
          <Hexagon q={1} r={-1} s={0}>
            <Text>1, -1, 0</Text>
          </Hexagon>
          <Hexagon q={1} r={0} s={-1}>
            <Text>1, 0, -1</Text>
          </Hexagon>
          {/* Pattern and text */}
          <Hexagon q={-1} r={1} s={0} fill="pat-2">
            <Text>-1, 1, 0</Text>
          </Hexagon>
          <Hexagon q={-1} r={0} s={1} />
          <Hexagon q={-2} r={0} s={1} />
          <Path start={new Hex(0, 0, 0)} end={new Hex(-2, 0, 1)} />
        </Layout>
        {/* Additional small grid, hexagons generated with generator */}
        <Layout
          css={css`
            fill: #4499a9;
            fill-opacity: 0.6;
          `}
          size={{ x: 2, y: 2 }}
          origin={{ x: 50, y: -30 }}
        >
          {moreHexas.map((hex, i) => (
            <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} />
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
        <g
          css={css`
            fill: #4499a9;
            fill-opacity: 0.6;
          `}
        >
          <circle cx="50" cy="0" r="10" />
          <circle cx="50" cy="10" r="8" />
          <circle cx="45" cy="20" r="6" />
        </g>
      </HexGrid>
    </div>
  )
}

export const Default = Template.bind({})
