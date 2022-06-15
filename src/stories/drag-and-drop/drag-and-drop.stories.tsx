import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { HexGrid, Hexagon } from "../.."
import { GameLayout } from "./GameLayout"
import { TilesLayout } from "./TilesLayout"

export default {
  title: "Example/DragAndDrop",
  component: Hexagon,
} as ComponentMeta<typeof Hexagon>

const Template: ComponentStory<typeof Hexagon> = (args, { argTypes }) => {
  return (
    <div className="app">
      <h2>Drag & drop</h2>
      <p>Drag tiles from the right-side grid and drop them to the left grid.</p>
      <p>
        You can also drag & drop them within the left board, but not back to the
        right side.
      </p>
      <p>
        <small>
          TilesLayout (on the right) does not handle `onDrop` and `onDragOver`
          and that's why it's not possible to drop anything on these tiles.
          GameLayout (on the left) handles all the events, so it's possible to
          start a drag as well as drop tiles. It also implements custom check to
          disallow drop on certain tiles, like the ones that are blocked or
          already have content in them.
        </small>
      </p>
      <HexGrid width={1600} height={1000} viewBox="-50 -50 100 100">
        <GameLayout />
        <TilesLayout />
      </HexGrid>
    </div>
  )
}

export const Default = Template.bind({})
