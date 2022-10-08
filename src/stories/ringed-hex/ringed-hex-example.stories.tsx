import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { HexGrid, Layout, Hexagon, GridGenerator } from "../.."
import "./ringed-hex-example.css"
import { css, jsx } from "@emotion/react"

export default {
  title: "Ringed Hex",
  component: Hexagon,
} as ComponentMeta<typeof Hexagon>

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
      <h1>Basic example of a Ringed Hex.</h1>
      <HexGrid width={1200} height={1000}>
        <Layout size={{ x: 7, y: 7 }}>
          <Hexagon q={args.q} r={args.r} s={args.s} rings={0} />
          <Hexagon q={args.q} r={args.r} s={args.s} rings={1} />
          <Hexagon q={args.q} r={args.r} s={args.s} rings={2} />
        </Layout>
      </HexGrid>
    </div>
  )
}

export const Default = Template.bind({})
