import { ComponentMeta } from "@storybook/react"
import { HexGrid } from "../.."
import { COLORS } from "../colors"

export default {
  title: "Components/HexGrid",
  component: HexGrid,
} as ComponentMeta<typeof HexGrid>

export const Basic = () => (
  <HexGrid
    style={{
      border: `8px solid ${COLORS.red[7]}`,
      background: COLORS.red[2],
    }}
    width={"100%"}
    height={"50vh"}
    viewBox="-10 -10 50 50"
  >
    {/* this svg element is just here to demonstrate that the outer
     HexGrid is just an svg element and does not do anything special */}
    <circle
      cx="0"
      cy="0"
      r="10"
      stroke={COLORS.gray[7]}
      fill={COLORS.gray[3]}
    />
  </HexGrid>
)

export const WithSeveralSvgComponents = () => (
  <HexGrid
    style={{
      border: `8px solid ${COLORS.red[7]}`,
      background: COLORS.red[2],
    }}
    viewBox="-50 -50 100 100"
  >
    <circle
      cx="0"
      cy="0"
      r="10"
      stroke={COLORS.gray[7]}
      fill={COLORS.gray[3]}
    />
    <rect
      x="10"
      y="10"
      width="50"
      height="20"
      style={{ fill: COLORS.gray[3], stroke: COLORS.gray[7] }}
    />
    <line x1="0" y1="0" x2="200" y2="200" style={{ stroke: COLORS.dark[5] }} />
    <polygon
      points="-30,-5 -30,30 0,20"
      style={{ fill: COLORS.blue[5], stroke: COLORS.blue[8], strokeWidth: 1 }}
    />
    <polyline
      points="-50,-50 -30,-25 0,10 -20,30 0,30"
      style={{ fill: "none", stroke: COLORS.violet[5], strokeWidth: 1 }}
    />

    <path
      d="M 10 35 q 15 -30 30 0"
      stroke={COLORS.cyan[4]}
      stroke-width="1"
      fill="none"
    />
    <text x="0" y="15" fill={COLORS.pink[5]} transform="rotate(30 20,40)">
      Some SVG components
    </text>
    <text x="0" y="-20" style={{ fill: COLORS.blue[8], fontSize: "0.5rem" }}>
      Several lines:
      <tspan x="0" y="-10">
        First line.
      </tspan>
      <tspan x="0" y="0">
        Second line.
      </tspan>
    </text>
  </HexGrid>
)
