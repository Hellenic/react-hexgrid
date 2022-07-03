import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { HexGrid, Layout, Hexagon, GridGenerator } from "../.."
import "./basic-example.css"
import { css, jsx } from "@emotion/react"

export default {
  title: "Basic",
  component: Hexagon,
} as ComponentMeta<typeof Hexagon>

const hexagons = GridGenerator.parallelogram(-2, 3, -2, 1)

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
      <HexGrid width={1200} height={1000}>
        <Layout size={{ x: 7, y: 7 }}>
          {hexagons.map((hex, i) => (
            <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} />
          ))}
        </Layout>
      </HexGrid>
    </div>
  )
}

export const Default = Template.bind({})
