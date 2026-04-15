import React from "react"
import { render } from "@testing-library/react"

import { HexGrid } from "../../src/HexGrid"

test("HexGrid should render correctly with default props", () => {
  const { container } = render(
    <HexGrid>
      <div>child</div>
    </HexGrid>,
  )
  expect(container.firstChild).toMatchSnapshot()
})

test("HexGrid should render correctly with custom props", () => {
  const { container } = render(
    <HexGrid width={888} height={666} viewBox={"-150 -150 1100 1100"}>
      <div>child</div>
    </HexGrid>,
  )
  expect(container.firstChild).toMatchSnapshot()
})

test("HexGrid should accept percentage in width and height", () => {
  const { container } = render(
    <HexGrid width={"100%"} height={"50%"}>
      <div>child</div>
    </HexGrid>,
  )
  expect(container.firstChild).toMatchSnapshot()
})
