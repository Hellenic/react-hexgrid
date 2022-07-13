import * as React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { HexGrid, Layout, Hexagon, GridGenerator, HexUtils } from "../.."
import { css } from "@emotion/react"
import { useInterval } from "react-use"
import { COLORS } from "../colors"

export default {
  title: "Wayoflife",
  component: Hexagon,
} as ComponentMeta<typeof Hexagon>

const elementSize = 5
const count = 5

const initialHexagons = GridGenerator.hexagon(count)

type State = "Dead" | "Living"

type Coordinates = { q: number; r: number; s: number }

type Cell = Coordinates & { state: State }

const hexas: Cell[] = initialHexagons.map(({ q, r, s }) => ({
  ...{ q, r, s },
  state: (Math.random() < 0.15 ? "Living" : "Dead") as State,
}))

type CellDict = { [coords: string]: Cell }

const dict: CellDict = {}

hexas.forEach((hex) => {
  const { q, r, s } = hex
  dict[`${q}-${r}-${s}`] = hex
})
const rules = `Each cell with one or no neighbors dies from isolation.
Each cell with three or more neighbors dies from overpopulation.
Only the cells with two neighbors survives.

Dead cells
Each cell with two neighbors revives.`

function getNeighbors(hex: Cell, dict: CellDict) {
  let neighbors = HexUtils.neighbors(hex)
  return neighbors
    .map(({ q, r, s }) => dict[`${q}-${r}-${s}`])
    .filter((v) => Boolean(v))
}

function countLivingNeighbors(hex: Cell, dict: CellDict) {
  const neighbors = getNeighbors(hex, dict)
  return neighbors.reduce((v1, v2) => v1 + (v2.state === "Living" ? 1 : 0), 0)
}

const size = { x: elementSize, y: elementSize }

const colors = [COLORS.blue, COLORS.cyan, COLORS.teal]

const Template: ComponentStory<typeof Hexagon> = (args, { argTypes }) => {
  const [hexagons, setHexagons] = React.useState<CellDict>(dict)
  const [step, setI] = React.useState(0)

  useInterval(() => {
    const result: CellDict = {}
    Object.keys(hexagons).forEach((coords) => {
      const element = hexagons[coords]
      const { q, r, s, state } = element
      let livingNeighbors = countLivingNeighbors(element, hexagons)

      if (livingNeighbors == 2) {
        result[`${q}-${r}-${s}`] = { ...element, state: "Living" }
      } else {
        result[`${q}-${r}-${s}`] = { ...element, state: "Dead" }
      }
    })

    setHexagons(result)
    setI(step + 1)
  }, 3000)
  return (
    <div
      style={{ background: COLORS.gray[1] }}
      css={css`
        margin: 0;
        padding: 1em;
        font-family: sans-serif;
        // background: #f0f0f0;
      `}
    >
      {/* <button
        onClick={() => {
          const result: CellDict = {}
          Object.keys(hexagons).forEach((coords) => {
            const element = hexagons[coords]
            const { q, r, s, state } = element
            let livingNeighbors = countLivingNeighbors(element, hexagons)

            if (livingNeighbors == 2) {
              result[`${q}-${r}-${s}`] = { ...element, state: "Living" }
            } else {
              result[`${q}-${r}-${s}`] = { ...element, state: "Dead" }
            }
          })

          setHexagons(result)
        }}
      >
        Tick
      </button> */}
      <div>{rules}</div>
      <HexGrid
        width={800}
        height={600}
        css={css`
          g {
            fill: #3f51b5;
            fill-opacity: 0.9;
            &:hover {
              fill-opacity: 1;
            }
            text {
              font-size: 0.2em;
              fill: #000;
              fill-opacity: 0.9;
              transition: fill-opacity 1.9s;
              transition: fill 1.9s;
            }
            polygon {
              stroke: gray;
              stroke-width: 0.1;
              transition: fill-opacity 1.9s;
              transition: fill 2s ease;
            }
          }
        `}
      >
        <Layout size={size} flat={true} spacing={1}>
          {Object.keys(hexagons)
            .map((v) => hexagons[v])
            .map((hex, i) => (
              <Hexagon
                key={i}
                q={hex.q}
                r={hex.r}
                s={hex.s}
                cellStyle={{
                  fill:
                    hex.state === "Dead"
                      ? COLORS.gray[4]
                      : colors[step % colors.length][7],
                }}
              >
                {/* <Text>{hex.state}</Text> */}
                {/* <Text style={{ fontSize: "0.1rem" }}>
                  {HexUtils.getID(hex)}
                </Text> */}
                {/* <Text
                  style={{ fill: "red" }}
                >
                  {countLivingNeighbors(hex, hexagons)}
                </Text> */}
              </Hexagon>
            ))}
        </Layout>
      </HexGrid>
    </div>
  )
}

export const Default = Template.bind({})
