import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { CustomForm } from "..";
import React from "react";


describe('CustomForm should works', () => {

    test('should renders', () => {

        render(<CustomForm />)

        const underTestFirstLabel = screen.getByLabelText(`Filter todo's:`)
        const underTestSecondLabel = screen.getByLabelText('Add todo:')
        const underTestSubmitButton = screen.getByTestId('ea3fb194178a44')

        expect(underTestFirstLabel).toBeInTheDocument()
        expect(underTestFirstLabel).toBeVisible()

        expect(underTestSecondLabel).toBeInTheDocument()
        expect(underTestSecondLabel).toBeVisible()

        expect(underTestSubmitButton).toBeInTheDocument()
        expect(underTestSubmitButton).toBeVisible()
    })

    test('should adds and filters todos', () => {
        Object.defineProperty(window, 'crypto', {
            value: { randomUUID: () => '90na4oq2y' },
        });
        render(<CustomForm />)

        const underTestFilterInput = screen.getByTestId('ba94460be6d')
        const underTestAddTodoInput = screen.getByTestId('83114257f96e')
        const underTestSubmitButton = screen.getByTestId('ea3fb194178a44')

        fireEvent.change(underTestAddTodoInput, { target: { value: 'test1' } })
        fireEvent.click(underTestSubmitButton)

        const newUnderTestTodoAdded = screen.getByText('test1')
        expect(newUnderTestTodoAdded).toBeInTheDocument()
        expect(newUnderTestTodoAdded).toBeVisible()

        fireEvent.change(underTestFilterInput, { target: { value: 'other thing' } })

        expect(newUnderTestTodoAdded).not.toBeInTheDocument()
        expect(newUnderTestTodoAdded).not.toBeVisible()
    })

    test('should does nothing if newTodoName input field is empty', () => {
        render(<CustomForm />)

        const underTestAddTodoInput = screen.getByTestId('83114257f96e')
        const underTestSubmitButton = screen.getByTestId('ea3fb194178a44')

        expect(underTestAddTodoInput).toHaveTextContent('')

        fireEvent.click(underTestSubmitButton)

        expect(underTestAddTodoInput).toHaveTextContent('')
    })
})