import * as React from "react"
import { GridGenerator, Layout, Hexagon, Text, Pattern, HexUtils } from "../.."
import "./GameLayout.css"

export type GameLayoutProps = {}
const initialHexagons = GridGenerator.hexagon(2)
initialHexagons[0].blocked = true
initialHexagons[1].blocked = true

export function GameLayout(props: GameLayoutProps) {
  const [hexagons, setHexagons] = React.useState(initialHexagons)

  return (
    <Layout
      className="game"
      size={{ x: 10, y: 10 }}
      flat={true}
      spacing={1.08}
      origin={{ x: -30, y: 0 }}
    >
      {hexagons.map((hex, i) => (
        <Hexagon
          key={i}
          q={hex.q}
          r={hex.r}
          s={hex.s}
          className={hex.blocked ? "blocked" : undefined}
          // className={"blocked"}
          fill={hex.image ? HexUtils.getID(hex) : undefined}
          data={hex}
          onDragStart={(event, source) => {
            // If this tile is empty, let's disallow drag
            if (!source.data?.text) {
              event.preventDefault()
            }
          }}
          // onDragEnd you can do some logic, e.g. to clean up hexagon if drop was success

          onDragEnd={(event, source, success) => {
            if (!success) {
              return
            }
            // TODO Drop the whole hex from array, currently somethings wrong with the patterns

            // When hexagon is successfully dropped, empty it's text and image
            const hexas = hexagons.map((hex) => {
              if (HexUtils.equals(source.state.hex, hex)) {
                hex.text = undefined
                hex.image = undefined
              }
              return hex
            })
            setHexagons(hexas)
          }}
          // onDrop you can read information of the hexagon that initiated the drag

          onDrop={(event, source, targetProps) => {
            const hexas = hexagons.map((hex) => {
              // When hexagon is dropped on this hexagon, copy it's image and text
              if (HexUtils.equals(source.state.hex, hex)) {
                hex.image = targetProps.data.image
                hex.text = targetProps.data.text
              }
              return hex
            })

            setHexagons(hexas)
          }}
          // Decide here if you want to allow drop to this node

          onDragOver={(event, source) => {
            console.log({ event })
            console.log({ source })
            // Find blocked hexagons by their 'blocked' attribute
            const blockedHexas = hexagons.filter((h) => h.blocked)
            // Find if this hexagon is listed in blocked ones
            const blocked = blockedHexas.find((blockedHex) => {
              return HexUtils.equals(source.state.hex, blockedHex)
            })

            const text = source.data?.text
            // Allow drop, if not blocked and there's no content already
            if (!blocked && !text) {
              // Call preventDefault if you want to allow drop
              event.preventDefault()
            }
          }}
        >
          <Text>{hex.text || HexUtils.getID(hex)}</Text>
          {hex.image && <Pattern id={HexUtils.getID(hex)} link={hex.image} />}
        </Hexagon>
      ))}
    </Layout>
  )
}

export default GameLayout
