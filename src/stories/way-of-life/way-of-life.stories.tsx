import * as React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { HexGrid, Layout, Hexagon, GridGenerator, HexUtils } from "../.."
import { css } from "@emotion/react"
import { useInterval } from "react-use"
import { COLORS } from "../colors"

export default {
  title: "Way of life",
  component: Hexagon,
} as ComponentMeta<typeof Hexagon>

type State = "Dead" | "Living"

type Coordinates = { q: number; r: number; s: number }

type Cell = Coordinates & { state: State }

type CellDict = { [coords: string]: Cell }

function reset() {
  const count = 8
  const initialHexagons = GridGenerator.hexagon(count)
  const dict: CellDict = {}
  const hexas: Cell[] = initialHexagons.map(({ q, r, s }) => ({
    ...{ q, r, s },
    state: (Math.random() < 0.4 &&
    HexUtils.distance({ q, r, s }, { q: 0, r: 0, s: 0 }) <= 3
      ? "Living"
      : "Dead") as State,
  }))
  hexas.forEach((hex) => {
    const { q, r, s } = hex
    dict[`${q}-${r}-${s}`] = hex
  })
  return dict
}

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

const colors = [COLORS.teal]
const elementSize = 2.7
const size = { x: elementSize, y: elementSize }

const Template: ComponentStory<typeof Hexagon> = (args, { argTypes }) => {
  const [hexagons, setHexagons] = React.useState<CellDict>({})
  React.useEffect(() => {
    const hexas = reset()
    setHexagons(hexas)
  }, [])
  const [step, setI] = React.useState(0)
  const [speed, setSpeed] = React.useState(20)
  const timing = speed / 20.0

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
  }, timing * 1000)

  const dyingAnimationDuration = timing * 1.5
  const revivingAnimationDuration = timing * 0.8

  const timingFunctionDying = `fill ${dyingAnimationDuration}s cubic-bezier(0.7, 0.8, 0.9, 1)`
  const timingFunctionReviving = `fill ${revivingAnimationDuration}s cubic-bezier(0.2, 0.5, 0.9, 1)`

  return (
    <div
      style={{ background: COLORS.gray[1] }}
      css={css`
        margin: 0;
        padding: 1em;
        font-family: sans-serif;
      `}
    >
      <div>
        <p>
          <b>Living cells: </b>
          Each cell with one or no neighbors dies from isolation. Each cell with
          three or more neighbors dies from overpopulation. Only the cells with
          two neighbors survive.
        </p>
        <p>
          <b>Dead cells:</b> Each cell with two neighbors revives.
        </p>
      </div>
      <div>
        <button
          onClick={() => {
            const newGrid = reset()
            setHexagons(newGrid)
          }}
        >
          Reset
        </button>{" "}
        <button onClick={() => setSpeed(speed + 1)}>-</button>{" "}
        <button onClick={() => setSpeed(Math.max(speed - 1, 1))}>+</button>{" "}
        speed: {speed}
      </div>
      <HexGrid width={800} height={800} viewBox="-40 -40 100 100">
        <Layout size={size} flat={true} spacing={1}>
          {Object.keys(hexagons)
            .map((v) => hexagons[v])
            .map((hex, i) => (
              <Hexagon
                key={i}
                q={hex.q}
                r={hex.r}
                s={hex.s}
                css={css`
                  g {
                    polygon {
                      fill: ${hex.state === "Dead"
                        ? COLORS.gray[
                            HexUtils.distance(hex, { q: 0, r: 0, s: 0 }) % 4
                          ]
                        : colors[step % colors.length][
                            5 +
                              (HexUtils.distance(hex, { q: 0, r: 0, s: 0 }) % 3)
                          ]};
                      stroke: ${COLORS.dark[4]};
                      stroke-opacity: ${0.6 /
                      HexUtils.distance(hex, { q: 0, r: 0, s: 0 })};
                      stroke-width: 0.15;
                      transition: ${hex.state === "Dead"
                        ? timingFunctionDying
                        : timingFunctionReviving};
                    }
                  }
                `}
              />
            ))}
        </Layout>
      </HexGrid>
    </div>
  )
}

export const Default = Template.bind({})
