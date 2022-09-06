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
      {/* the hexagon is rendered at the q,r,s coordinates. In this case in the origin (0,0) in the svg space */}
      <Hexagon r={0} q={0} s={0} style={{ fill: COLORS.dark[3] }} />
    </Layout>
  </HexGrid>
)

export const Basic: ComponentStory<typeof Hexagon> = Template.bind({})
