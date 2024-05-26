import { render } from '@testing-library/react'
import App from "~/App.tsx";
import {describe, expect, test} from "vitest";

describe("Renders the main page", () => {
	test("renders", () => {
		render(<App />)
		expect(true).toBeTruthy()
	})
})