import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import {
  HexGrid,
  Layout,
  Hexagon,
  GridGenerator,
  Path,
  HexUtils,
  Text,
} from "../"
import Hex from "./models/Hex"

export default {
  title: "Stories/PathFinding",
  component: Hexagon,
} satisfies Meta<typeof Hexagon>

type Story = StoryObj<typeof Hexagon>

const initialHexagons = GridGenerator.hexagon(4)
const Template: StoryObj<typeof Hexagon> = (args, { argTypes }) => {
  const [hexagons, setHexagons] = React.useState(initialHexagons)
  const [path, setPath] = React.useState<{
    start: null | Hex
    end: null | Hex
  }>({ start: null, end: null })

  return (
    <div
      className="pathfinding-example"
      style={{
        background: "#133b43",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>Pathfinding & active highlight</h2>
      <p>
        Click a tile to start drawing a path to your cursor. Click again to
        cancel.
      </p>
      <p>Hover around the board to see helper lines drawn.</p>
      <HexGrid width={1200} height={800}>
        <Layout
          size={{ x: 6, y: 6 }}
          flat={false}
          spacing={1.1}
          origin={{ x: 0, y: 0 }}
        >
          <>
            {hexagons.map((hex, i) => (
              <Hexagon
                key={i}
                q={hex.q}
                r={hex.r}
                s={hex.s}
                className={hex.props ? hex.props.className : undefined}
                onMouseEnter={(event, source) => {
                  // Set the path's end on hover
                  // const { path, hexagons } = this.state;
                  const targetHex = source.state.hex
                  path.end = targetHex

                  // Color some hexagons
                  const coloredHexas = hexagons.map((hex) => {
                    hex.props = hex.props || {}
                    // Highlight tiles that are next to the target (1 distance away)
                    hex.props.className =
                      HexUtils.distance(targetHex, hex) < 2 ? "active" : ""

                    // If the tile is on same coordinate, add class specific to the coordinate name
                    hex.props.className += targetHex.q === hex.q ? " q " : ""
                    hex.props.className += targetHex.r === hex.r ? " r " : ""
                    hex.props.className += targetHex.s === hex.s ? " s " : ""

                    return hex
                  })

                  setPath(path)
                  setHexagons(coloredHexas)
                  // this.setState({ path, hexagons: coloredHexas });
                }}
                onClick={(e, source) => {
                  if (path.start == null) {
                    path.start = source.state.hex
                  } else {
                    path.start = null
                    path.end = null
                  }
                  setPath(path)
                }}
              >
                <Text>{HexUtils.getID(hex)}</Text>
              </Hexagon>
            ))}
          </>
          <Path start={path.start} end={path.end} />
        </Layout>
      </HexGrid>
    </div>
  )
}

export const Default = Template.bind({})
