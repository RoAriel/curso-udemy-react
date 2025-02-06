import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Test AddCategory', () => {


  test('should mostrar el valor en caja de texto', () => {

    render(<AddCategory onNewCategory={() => { }} />)

    const input = screen.getByRole('textbox')

    fireEvent.input(input, { target: { value: 'Goku' } })

    expect(input.value).toBe('Goku')

  })

  test('should llamar onNewCategory si el input tiene valor', () => {

    const inputValue = 'Saitama'

    const onNewCategory = jest.fn()


    render(<AddCategory onNewCategory={onNewCategory} />)
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input(input, { target: { value: inputValue } })
    fireEvent.submit(form)

    expect(input.value).toBe('')

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledWith(inputValue)

  })

  test('dont should llamar al onNewCategory si el input esta vacio  ', () => {

    const onNewCategory = jest.fn()

    render(<AddCategory onNewCategory={onNewCategory} />)
    const form = screen.getByRole('form')
    fireEvent.submit(form)

    expect(onNewCategory).toHaveBeenCalledTimes(0)
    expect(onNewCategory).not.toHaveBeenCalled()

  })

})
