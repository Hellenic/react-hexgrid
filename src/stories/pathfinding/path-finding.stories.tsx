import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import {
  HexGrid,
  Layout,
  Hexagon,
  GridGenerator,
  Path,
  HexUtils,
  Text,
} from "../.."
import "./App.css"
import Hex from "../../models/Hex"

export default {
  title: "PathFinding",
  component: Hexagon,
} as ComponentMeta<typeof Hexagon>

const initialHexagons = GridGenerator.hexagon(4).map((v) => ({
  ...v,
  className: "",
}))
const Template: ComponentStory<typeof Hexagon> = (args, { argTypes }) => {
  const [hexagons, setHexagons] = React.useState(initialHexagons)
  const [path, setPath] = React.useState<{
    start: Hex | undefined
    end: Hex | undefined
  }>({ start: undefined, end: undefined })

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
                className={hex.className}
                onMouseEnter={(event, source) => {
                  // Set the path's end on hover
                  // const { path, hexagons } = this.state;
                  const targetHex = source.state.hex
                  path.end = targetHex

                  setHexagons((value) => {
                    // Color some hexagons
                    const coloredHexas = hexagons.map((hex) => {
                      let className =
                        HexUtils.distance(targetHex, hex) < 2 ? "active" : ""
                      className += targetHex.q === hex.q ? " q " : ""
                      className += targetHex.r === hex.r ? " r " : ""
                      className += targetHex.s === hex.s ? " s " : ""
                      return { ...hex, className }
                    })
                    return coloredHexas
                  })
                  setPath(path)
                }}
                onClick={(e, source) => {
                  if (path.start == null) {
                    path.start = source.state.hex
                  } else {
                    path.start = undefined
                    path.end = undefined
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
