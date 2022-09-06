import { ComponentMeta } from "@storybook/react"
import { HexGrid } from "../.."
import { COLORS } from "../colors"

export default {
  title: "Components/HexGrid",
  component: HexGrid,
} as ComponentMeta<typeof HexGrid>

export const Basic = () => (
  // the HexGrid is just a wrapper around a normal svg element. The viewBox is defaults to "-50 -50 100 100"
  <HexGrid
    style={{
      border: `2px solid ${COLORS.gray[7]}`,
      background: COLORS.gray[2],
    }}
    width={"100%"}
    height={"50vh"}
  >
    {/* Normal svg elements can be placed as normal */}
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
      border: `2px solid ${COLORS.gray[7]}`,
      background: COLORS.gray[2],
    }}
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
      width="40"
      height="20"
      style={{ fill: COLORS.blue[3], stroke: COLORS.gray[7] }}
    />
    <line x1="0" y1="0" x2="10" y2="10" style={{ stroke: COLORS.dark[5] }} />
    <polygon
      points="-50,-20 -55,25 -25,5"
      style={{ fill: COLORS.blue[0], stroke: COLORS.blue[3], strokeWidth: 1 }}
    />
    <polyline
      points="-50,-25 -40,-25 -10,10 -20,30 -40,30"
      style={{ fill: "none", stroke: COLORS.dark[2], strokeWidth: 1 }}
    />

    <path
      d="M 0 -25 q 15 -30 30 0"
      stroke={COLORS.cyan[4]}
      stroke-width="1"
      fill="none"
    />
    <text x="15" y="-10" style={{ fill: COLORS.blue[8], fontSize: "0.5rem" }}>
      Some text...
    </text>
  </HexGrid>
)
