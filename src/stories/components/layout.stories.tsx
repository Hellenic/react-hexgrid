import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Hexagon, HexGrid, Layout } from "../.."
import Point from "../../models/Point"
import { COLORS } from "../colors"

export default {
  title: "Components/Layout",
  component: Layout,
} as ComponentMeta<typeof Layout>

const Template: ComponentStory<typeof Layout> = (args) => (
  <HexGrid
    style={{
      border: `2px solid ${COLORS.gray[7]}`,
      background: COLORS.gray[2],
    }}
    width="100%"
    height={400}
  >
    <Layout {...args}>
      {/* Regular elements are rendered as regular */}
      <circle
        cx="20"
        cy="0"
        r="5"
        stroke={COLORS.gray[7]}
        fill={COLORS.gray[3]}
      />
      {/* Special elements like Hexagons are placed based on their rqs-based coordinates */}
      <Hexagon r={4} q={-4} s={0} />
      <Hexagon r={3} q={-3} s={0} />
      <Hexagon r={3} q={-2} s={1} />
      <Hexagon r={3} q={-4} s={3} />
    </Layout>
  </HexGrid>
)

export const Basic: ComponentStory<typeof Layout> = Template.bind({})
Basic.args = {
  spacing: 1.1,
  size: new Point(5, 5),
  origin: new Point(0, 0),
}
