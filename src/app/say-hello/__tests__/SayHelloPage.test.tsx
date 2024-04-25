import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { SayHelloPage } from "..";

describe('SayHelloPage should works', () => {

    test('should renders', () => {

        render(<SayHelloPage />)

        const underTestText = screen.getByText('Hello world')

        expect(underTestText).toBeInTheDocument()
        expect(underTestText).toBeVisible()
    })
})