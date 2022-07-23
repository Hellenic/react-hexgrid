import { css } from "@emotion/react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { GridGenerator, Hex, Hexagon, HexGrid, Layout, Path } from "../.."
import { COLORS } from "../colors"

type PathType = typeof Path

export default {
  title: "Components/Path",
  component: Path,
} as ComponentMeta<PathType>

const hexas = GridGenerator.hexagon(10)

const Template: ComponentStory<PathType> = (args) => (
  <HexGrid
    style={{
      border: `4px solid ${COLORS.gray[8]}`,
      background: COLORS.gray[1],
    }}
    width="100%"
    height={800}
  >
    <Layout spacing={1.05}>
      <>
        {hexas.map(({ q, r, s }) => (
          <Hexagon
            css={css`
              fill: ${COLORS.dark[2]};
            `}
            onClick={() => console.log("clicked", { q, r, s })}
            q={q}
            r={r}
            s={s}
          />
        ))}
      </>
      <Path
        css={css`
          fill: none;
          stroke: ${COLORS.blue[8]};
          stroke-width: 0.1em;
          stroke-linecap: round;
          stroke-linejoin: round;
        `}
        {...args}
      />
    </Layout>
  </HexGrid>
)

export const Basic: ComponentStory<PathType> = Template.bind({})
Basic.args = {
  start: new Hex(5, -3, -2),
  end: new Hex(-5, 1, 4),
}
