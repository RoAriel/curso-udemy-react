import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('Test en <CounterApp />', () => {

    const initialValue = 100

    test('should match con snapshot', () => {
      
        const {container} = render(<CounterApp value={initialValue}/>)
        expect(container).toMatchSnapshot();
    })
    
    test('should mostrar valor inicial 100', () => {
      
        render(<CounterApp value={initialValue} />)
        expect(screen.getByRole('heading', {level:2}).innerHTML).toContain(initialValue.toString())
    })

    test('should incrementar con el +1', () => {
      
        render(<CounterApp value={initialValue} />)
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByRole('heading', {level:2}).innerHTML).toContain('101')


    })

    test('should decrementar con el -1', () => {
      
        render(<CounterApp value={initialValue} />)
        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByRole('heading', {level:2}).innerHTML).toContain('99')

    })

    test('should reset el contador', () => {
      
        render(<CounterApp value={initialValue} />)
        fireEvent.click(screen.getByText('-1'))
        fireEvent.click(screen.getByText('-1'))

        //forma de encontrar el boton
        fireEvent.click(screen.getByRole('button',{name: 'btn-reset'}))
        expect(screen.getByRole('heading', {level:2}).innerHTML).toContain('100')


    })
    
    
  
})
