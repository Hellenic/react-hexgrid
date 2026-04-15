import React from "react"
import { render } from "@testing-library/react"

import { Layout } from "../../src/Layout"
import { Path } from "../../src/Path"

test("Path should render correctly", () => {
  const { container } = render(
    <svg>
      <Layout
        className={"test1"}
        size={{ x: 6, y: 6 }}
        flat={false}
        spacing={1.1}
        origin={{ x: 0, y: 0 }}
      >
        <Path start={{ q: 1, r: 1, s: -1 }} end={{ q: 0, r: 0, s: 0 }} />
      </Layout>
    </svg>,
  )
  expect(container.firstChild).toMatchSnapshot()
})

test("Path should render correctly without an end hex", () => {
  const { container } = render(
    <svg>
      <Layout
        className={"test2"}
        size={{ x: 6, y: 6 }}
        flat={false}
        spacing={1.1}
        origin={{ x: 0, y: 0 }}
      >
        <Path start={{ q: 1, r: 1, s: -1 }} />
      </Layout>
    </svg>,
  )
  expect(container.firstChild).toMatchSnapshot()
})
