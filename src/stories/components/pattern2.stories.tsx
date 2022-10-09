import { css } from "@emotion/react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { GridGenerator, Hex, Hexagon, HexGrid, Layout, Pattern } from "../.."
import { COLORS } from "../colors"

type PathType = typeof Pattern

export default {
  title: "Components/Pattern2",
  component: Pattern,
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
    <Layout>
      <Hexagon
        css={css`
          fill: #4499a9;
          fill-opacity: 0.6;

          &:hover {
            fill: #7be3f6;
            fill-opacity: 0.9;
          }
          polygon {
            stroke: #7be3f6;
            stroke-width: 0.2;
            transition: fill-opacity 0.5s;
          }
        `}
        q={0}
        r={0}
        s={0}
        fillUrl={
          "https://firebasestorage.googleapis.com/v0/b/illuviumsite.appspot.com/o/images%2FArchos.JPG-01276e8-c24-8ca8-e201-425d12febad?alt=media&token=8de71462-d4e0-42f0-a80f-dd76276bcfcf"
        }
      />
      <Hexagon
        css={css`
          fill: #4499a9;
          fill-opacity: 0.6;

          &:hover {
            fill: #7be3f6;
            fill-opacity: 0.9;
          }
          polygon {
            stroke: #7be3f6;
            stroke-width: 0.2;
            transition: fill-opacity 0.5s;
          }
        `}
        q={2}
        r={-1}
        s={0}
        rings={1}
        fillUrl={
          "https://firebasestorage.googleapis.com/v0/b/illuviumsite.appspot.com/o/images%2FArchos.JPG-01276e8-c24-8ca8-e201-425d12febad?alt=media&token=8de71462-d4e0-42f0-a80f-dd76276bcfcf"
        }
      />
      <Hexagon
        css={css`
          fill: #4499a9;
          fill-opacity: 0.6;

          &:hover {
            fill: #7be3f6;
            fill-opacity: 0.9;
          }
          polygon {
            stroke: #7be3f6;
            stroke-width: 0.2;
            transition: fill-opacity 0.5s;
          }
        `}
        q={6}
        r={-3}
        s={0}
        rings={2}
        fillUrl={
          "https://firebasestorage.googleapis.com/v0/b/illuviumsite.appspot.com/o/images%2FArchos.JPG-01276e8-c24-8ca8-e201-425d12febad?alt=media&token=8de71462-d4e0-42f0-a80f-dd76276bcfcf"
        }
      />
    </Layout>
  </HexGrid>
)
export const Default = Template.bind({})
