import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp />', () => {
    // test('Debe hacer match con el snapshot', () => {

    //     const title = 'Hola soy app'

    //     const {container} =   render(<FirstApp title = {title}/>)
    //     expect(container).toMatchSnapshot();
        
    // })

    test('should mostrar el title en h1', () => {

        const title = 'Hola soy app'

        const {container, getByText, getByTestId} =   render(<FirstApp title = {title}/>)
        expect(getByText(title)).toBeTruthy()
        expect(getByTestId('test-title').innerHTML).toContain(title)
    })
    
    test('should mostrar sub enviado por props', () => {
        const title = 'Hola soy app'
        const sub = 'Soy un Sub'

        const {getAllByText} =   render(
        <FirstApp 
            title = {title} 
            subTitle ={sub}
        />)
        expect(getAllByText(sub).length).toBe(2)
    })
    

})
