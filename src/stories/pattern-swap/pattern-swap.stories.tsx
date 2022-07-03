import * as React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import {
  HexGrid,
  Layout,
  Hexagon,
  GridGenerator,
  Pattern,
  Text,
  HexUtils,
} from "../.."
import { css, jsx } from "@emotion/react"

export default {
  title: "PatternSwap",
  component: Hexagon,
} as ComponentMeta<typeof Hexagon>

const initialHexagons = GridGenerator.hexagon(2)
// Set additional data for hexagons
initialHexagons.forEach((hex) => {
  hex.pattern = "pattern1"
})

const Template: ComponentStory<typeof Hexagon> = (args, { argTypes }) => {
  const [hexagons, setHexagons] = React.useState(initialHexagons)
  return (
    <div
      css={css`
        margin: 0;
        padding: 1em;
        font-family: sans-serif;
        background: #133b43;
        color: white;
        text-align: center;
      `}
    >
      <h2
        css={css`
          font-size: 32px;
        `}
      >
        Hexagon Pattern Swap
      </h2>
      <p>Click a tile to swap it's pattern</p>
      <HexGrid width={1200} height={800}>
        <Layout
          size={{ x: 10, y: 10 }}
          flat={false}
          spacing={1.1}
          origin={{ x: 0, y: 0 }}
        >
          <>
            {hexagons.map((hex, i) => (
              <Hexagon
                css={css`
                  fill: #4499a9;
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
                `}
                key={i}
                q={hex.q}
                r={hex.r}
                s={hex.s}
                /* Here we pass the pattern which we want to display */
                fill={hex.pattern}
                /* onClick event gets back 2 properties: event and source (hexagon) */
                onClick={(event, source) => {
                  // Get our hexagon data
                  // Go through all of our hexagons and update patterns
                  const hexas = hexagons.map((hex) => {
                    // Switch pattern only for the hexagon that was clicked
                    if (HexUtils.equals(source.state.hex, hex)) {
                      // Assign new pattern to _our_ data
                      hex.pattern =
                        source.props?.fill === "pattern1"
                          ? "pattern2"
                          : "pattern1"
                    }

                    return hex
                  })

                  setHexagons([...hexas])
                }}
              >
                <Text
                  css={css`
                    font-size: 0.17em;
                    fill: white;
                    fill-opacity: 0.7;
                    transition: fill-opacity 0.5s;
                    &:hover {
                      fill-opacity: 1;
                    }
                  `}
                >
                  {HexUtils.getID(hex)}
                </Text>
                {/* <Text>{hex.pattern}</Text> */}
              </Hexagon>
            ))}
          </>
          <Pattern id="pattern1" link="https://picsum.photos/200?image=80" />
          <Pattern id="pattern2" link="https://picsum.photos/200?image=82" />
        </Layout>
      </HexGrid>
    </div>
  )
}

export const Default = Template.bind({})
