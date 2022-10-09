import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { HexGrid, Layout, Hexagon, GridGenerator } from "../.."
import "./basic-example.css"
import { css, jsx } from "@emotion/react"

export default {
  title: "Basic",
  component: Hexagon,
} as ComponentMeta<typeof Hexagon>

const hexagons = GridGenerator.orientedRectangle(125, 55);

const Template: ComponentStory<typeof Hexagon> = (args, { argTypes }) => {
  return (
    <div
      className="basic-example "
      css={css`
        margin: 0;
        padding: 1em;
        font-family: sans-serif;
        background: #f0f0f0;
      `}
    >
      <h1>Basic example of HexGrid usage.</h1>
      <HexGrid width={2200} height={2000} viewBox={"0 0 300 300"}>
        <Layout size={{ x: 1, y: 1 }}>
          {hexagons.map((hex, i) => (
            <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} />
          ))}
        </Layout>
      </HexGrid>
    </div>
  )
}

export const Default = Template.bind({})
