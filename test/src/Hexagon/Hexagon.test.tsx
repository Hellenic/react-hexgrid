import React from "react"
import renderer from "react-test-renderer"
import { render, fireEvent } from "@testing-library/react"

import { Layout } from "../../../src/Layout"
import { Hexagon } from "../../../src/Hexagon/Hexagon"

test("Hexagon should render correctly with default props", () => {
  const tree = renderer
    .create(
      <Layout
        className={"test1"}
        size={{ x: 6, y: 6 }}
        flat={false}
        spacing={1.1}
        origin={{ x: 0, y: 0 }}
      >
        <Hexagon q={0} r={0} s={0}>
          <div>child</div>
        </Hexagon>
      </Layout>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test.only("Hexagon mouse callbacks should be called", async () => {
  const onMouseEnter = jest.fn()
  const onMouseOver = jest.fn()
  const onMouseLeave = jest.fn()
  const onClick = jest.fn()
  const onDragStart = jest.fn()
  const onDragEnd = jest.fn()
  const onDragOver = jest.fn()
  const onDrop = jest.fn()

  const { container } = render(
    <svg>
      <Layout
        className={"layout"}
        size={{ x: 6, y: 6 }}
        flat={false}
        spacing={1.1}
        origin={{ x: 0, y: 0 }}
      >
        <Hexagon
          q={0}
          r={0}
          s={0}
          fill={"#333"}
          className={"test1"}
          data={{ a: "b" }}
          onMouseEnter={onMouseEnter}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          onDragOver={onDragOver}
          onDrop={onDrop}
        >
          <div>child</div>
        </Hexagon>
      </Layout>
    </svg>,
  )

  const el = container.getElementsByClassName("test1")[0]

  expect(el).toBeDefined()

  expect(onMouseOver).toBeCalledTimes(0)
  expect(onMouseEnter).toBeCalledTimes(0)
  fireEvent.mouseEnter(el)
  expect(onMouseEnter).toBeCalledTimes(1)
  // mouse over seems to be also called on mouse enter
  expect(onMouseOver).toBeCalledTimes(1)

  fireEvent.mouseOver(el)
  expect(onMouseOver).toBeCalledTimes(2)

  fireEvent.mouseLeave(el)
  expect(onMouseLeave).toBeCalledTimes(1)

  fireEvent.click(el)
  expect(onClick).toBeCalledTimes(1)

  fireEvent.dragStart(el, { dataTransfer: { setData: () => {} } })

  expect(onDragStart).toBeCalledTimes(1)

  fireEvent.dragEnd(el, { dataTransfer: { setData: () => {} } })

  expect(onDragEnd).toBeCalledTimes(1)

  fireEvent.dragOver(el)
  expect(onDragOver).toBeCalledTimes(1)

  fireEvent.drop(el, {
    dataTransfer: { getData: (data) => JSON.stringify({ data }) },
  })
  expect(onDrop).toBeCalledTimes(1)
})
