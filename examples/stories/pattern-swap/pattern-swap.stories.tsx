import React from "react"
import { StoryFn, Meta } from "@storybook/react"
import {
  HexGrid,
  Layout,
  Hexagon,
  GridGenerator,
  Pattern,
  Text,
  HexUtils,
} from "../.."

export default {
  title: "PatternSwap",
  component: Hexagon,
} as Meta<typeof Hexagon>

const initialHexagons = GridGenerator.hexagon(2)
// Set additional data for hexagons
initialHexagons.forEach((hex) => {
  hex.pattern = "pattern1"
})

const Template: StoryFn<typeof Hexagon> = () => {
  const [hexagons, setHexagons] = React.useState(initialHexagons)
  return (
    <>
      <div
        style={{ color: "white", padding: "1em", margin: 1, textAlign: "center", fontFamily: "sans-serif", backgroundColor: "#133b43" }}
      >
        <h2
          style={{ fontSize: "32px" }}
        >
          Hexagon Pattern Swap
        </h2>
        <p>Click a tile to swap its pattern</p>
        <HexGrid width={1000} height={800}>
          <Layout
            size={{ x: 10, y: 10 }}
            flat={false}
            spacing={1.1}
            origin={{ x: 0, y: 0 }}
          >
            <>
              {hexagons.map((hex, i) => (
                <Hexagon
                  cellStyle={{
                    fillOpacity: "0.6",
                    stroke: "#7be3f6",
                    strokeWidth: "0.2",
                  }}
                  key={i}
                  q={hex.q}
                  r={hex.r}
                  s={hex.s}
                  /* Here we pass the pattern which we want to display */
                  fill={hex.pattern}
                  /* onClick event gets back 2 properties: event and source (hexagon) */
                  onClick={(e: React.MouseEvent<SVGElement, MouseEvent>) => {
                    const prevFill: string | null = (e.target as SVGElement).getAttribute(
                      "fill"
                    );
                    const togglePat: string =
                      prevFill === "url(#pattern1)" ? "url(#pattern2)" : "url(#pattern1)";
                    (e.target as SVGElement).setAttribute("fill", togglePat);
                  }}
                >
                  <Text
                    style={{
                      fontSize: "0.3em",
                      fill: "white",
                      opacity: 1,
                    }}
                  >
                    {HexUtils.getID(hex)}
                  </Text>
                </Hexagon>
              ))}
            </>
            <Pattern id="pattern1" link="https://picsum.photos/200?image=80" />
            <Pattern id="pattern2" link="https://picsum.photos/200?image=82" />
          </Layout>
        </HexGrid>
      </div >
    </>
  )
}

export const Default = Template.bind({})
