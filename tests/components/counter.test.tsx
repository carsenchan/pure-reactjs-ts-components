import * as React from "react"
import { render } from "@testing-library/react"

import "jest-canvas-mock"

import Counter from "../../src/components/Counter/Counter"

describe("Counter Component Simple Test", () => {
  it("render with crashing", () => {
    render(<Counter />)
  })
})
