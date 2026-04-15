import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { GridGenerator, Hexagon, HexGrid, Layout, Pattern } from "../.."
import { COLORS } from "../colors"

type PathType = typeof Pattern

export default {
  title: "Components/Pattern",
  component: Pattern,
} as Meta<typeof Pattern>

const hexas = GridGenerator.hexagon(10)

const Template: StoryFn<PathType> = () => (
  <HexGrid
    style={{
      border: `4px solid ${COLORS.gray[8]}`,
      background: COLORS.gray[1],
    }}
    width="100%"
    height={800}
  >
    <Layout spacing={1.05}>
      <>
        {hexas.map((hex, i) => (
          <Hexagon
            fillOpacity="0.6"
            key={i}
            q={hex.q}
            r={hex.r}
            s={hex.s}
            fill={hex.r % 2 === 0 ? "pattern1" : "pattern2"}
            stroke="#7be3f6"
            strokeWidth="0.2"
          />
        ))}
      </>
      <Pattern id="pattern1" link="https://picsum.photos/200?image=80" />
      <Pattern id="pattern2" link="https://picsum.photos/200?image=82" />
    </Layout>
  </HexGrid>
)

/*
this belongs at line 26:
css={css`
  fill: {hex.r % 2 === 0 ? "pattern1" : "pattern2"};
  fill-opacity: 0.6;

  &:hover {
    fill: #7be3f6;
    fill-opacity: 0.9;
  }
  polygon {
    stroke: #7be3f6;
    stroke-width: 0.2;
    transition: fill-opacity 0.5s;
  }
`}*/

export const Default: StoryFn<typeof Pattern> = Template.bind({})
