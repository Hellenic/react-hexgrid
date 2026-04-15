import React from "react"
import { render } from "@testing-library/react"

import { Layout } from "../../src/Layout"

test("Layout should render correctly with default props", () => {
  const { container } = render(
    <svg>
      <Layout className={"test1"}>
        <div>child</div>
      </Layout>
    </svg>,
  )
  expect(container.firstChild).toMatchSnapshot()
})

test("Layout should render correctly with custom props", () => {
  const { container } = render(
    <svg>
      <Layout
        className={"test2"}
        flat={false}
        origin={{ x: 2, y: 4 }}
        size={{ x: 12, y: 14 }}
        spacing={2.0}
      >
        <div>child</div>
      </Layout>
    </svg>,
  )
  expect(container.firstChild).toMatchSnapshot()
})
