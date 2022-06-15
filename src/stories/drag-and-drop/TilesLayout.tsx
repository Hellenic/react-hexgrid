import * as React from "react"
import {
  GridGenerator,
  Layout,
  Hexagon,
  Text,
  Pattern,
  HexUtils,
  Hex,
} from "../.."
import "./TilesLayout.css"

export type TilesLayoutProps = {}
const initialHexagons = GridGenerator.parallelogram(-1, 1, -1, 2).map(
  (hexagon, index) => {
    return Object.assign({}, hexagon, {
      text: `Cat #${index}`,
      image: `https://picsum.photos/id/${index % 10}/100`,
    } as Hex)
  },
)
export function TilesLayout(props: TilesLayoutProps) {
  const [hexagons, setHexagons] = React.useState(initialHexagons)

  // onDragEnd you can do some logic, e.g. to clean up hexagon if drop was success

  return (
    <Layout
      className="tiles"
      size={{ x: 8, y: 8 }}
      flat={false}
      spacing={1.01}
      origin={{ x: 40, y: -20 }}
    >
      {hexagons.map((hex, i) => (
        <Hexagon
          key={i}
          q={hex.q}
          r={hex.r}
          s={hex.s}
          // fill={hex.image ? HexUtils.getID(hex) : null}
          data={hex}
          onDragStart={(event, source) => {
            console.log("on drag start")
            // Could do something on onDragStart as well, if you wish
          }}
          onDragEnd={(event, source, success) => {
            if (!success) {
              return
            }
            // TODO Drop the whole hex from array, currently somethings wrong with the patterns
            // const hexas = hexagons.filter(hex => !HexUtils.equals(targetHex, hex));
            const hexas = hexagons.map((hex) => {
              if (HexUtils.equals(source.state.hex, hex)) {
                hex.text = undefined
                hex.image = undefined
              }
              return hex
            })
            setHexagons(hexas)
          }}
        >
          <Text>{hex.text || ""}</Text>
          {!!hex.image && <Pattern id={HexUtils.getID(hex)} link={hex.image} />}
        </Hexagon>
      ))}
    </Layout>
  )
}

export default TilesLayout
