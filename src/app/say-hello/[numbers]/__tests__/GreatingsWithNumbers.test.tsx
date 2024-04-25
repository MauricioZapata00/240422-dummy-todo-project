import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { GreatingsWithNumbers } from "..";


describe('SayHelloPage should works', () => {

    test('should renders', () => {

        render(<GreatingsWithNumbers params={
            {
                numbers: '1'
            }
        } />)

        const underTestText = screen.getByText('Hello from 1')

        expect(underTestText).toBeInTheDocument()
        expect(underTestText).toBeVisible()
    })
})