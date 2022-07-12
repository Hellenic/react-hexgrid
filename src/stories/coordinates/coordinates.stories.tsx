import * as React from "react"
import { ComponentMeta } from "@storybook/react"
import { HexGrid, Layout, Hexagon, GridGenerator, Text } from "../.."
import { COLORS } from "../colors"

export default {
  title: "Coordinates",
  component: Hexagon,
} as ComponentMeta<typeof Hexagon>

const fontStyle = { fontWeight: 700, fontSize: "0.2rem" }
function Coordinates({
  q,
  r,
  s,
}: {
  q: number | string
  r: number | string
  s: number | string
}) {
  return (
    <>
      <Text
        transform={`translate(${0}, ${-3.5})`}
        style={{ ...fontStyle, fill: COLORS.red[8] }}
      >
        {q}
      </Text>
      <Text
        transform={`translate(${-3}, ${2})`}
        style={{ ...fontStyle, fill: COLORS.green[8] }}
      >
        {s}
      </Text>
      <Text
        transform={`translate(${3}, ${2})`}
        style={{ ...fontStyle, fill: COLORS.blue[8] }}
      >
        {r}
      </Text>
    </>
  )
}

const cellStyle = {
  fill: COLORS.orange[0],
  stroke: COLORS.orange[1],
  strokeWidth: 1.05,
}

const hexagons = GridGenerator.hexagon(3)
const Template = (args) => {
  return (
    <div style={{ background: COLORS.gray[4], padding: 16, paddingLeft: 32 }}>
      <h2 style={{ color: COLORS.dark[8] }}>Coordinates</h2>
      <HexGrid width={1200} height={800} viewBox="-50 -50 100 100">
        <Layout
          size={{ x: 7, y: 7 }}
          flat={true}
          spacing={1.1}
          origin={{ x: 0, y: 0 }}
        >
          <>
            {hexagons.map(({ q, r, s }) => (
              <Hexagon
                q={q}
                r={r}
                s={s}
                cellStyle={{
                  ...cellStyle,
                  stroke:
                    q === 0
                      ? COLORS.red[4]
                      : r === 0
                      ? COLORS.blue[4]
                      : s === 0
                      ? COLORS.green[4]
                      : cellStyle.stroke,
                  fill:
                    q === 0
                      ? COLORS.red[3]
                      : r === 0
                      ? COLORS.blue[3]
                      : s === 0
                      ? COLORS.green[3]
                      : cellStyle.fill,
                }}
              >
                <Coordinates q={q} r={r} s={s} />
              </Hexagon>
            ))}
            <Hexagon
              q={0}
              r={0}
              s={0}
              cellStyle={{ fill: COLORS.dark[3], stroke: COLORS.dark[4] }}
            >
              <Coordinates q={"Q"} r={"R"} s={"S"} />
              <Text style={{ fontSize: "0.2rem" }}>0</Text>
            </Hexagon>
          </>
        </Layout>
      </HexGrid>
    </div>
  )
}

export const Default = Template.bind({})
