import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Hexagon, HexGrid, Layout } from "../.."
import { COLORS } from "../colors"

export default {
  title: "Components/Hexagon",
  component: Hexagon,
} as ComponentMeta<typeof Hexagon>

const Template: ComponentStory<typeof Hexagon> = (args) => (
  <HexGrid
    style={{
      border: `2px solid ${COLORS.gray[7]}`,
      background: COLORS.gray[2],
    }}
    width="100%"
    height={400}
  >
    <Layout>
      {/* Regular elements are rendered as regular */}

      {/* Special elements like Hexagons are placed based on their rqs-based coordinates */}
      <Hexagon {...args} />
    </Layout>
  </HexGrid>
)

export const Basic: ComponentStory<typeof Hexagon> = Template.bind({})
Basic.args = {
  r: 0,
  q: 0,
  s: 0,
  style: { fill: COLORS.dark[3] },
}
