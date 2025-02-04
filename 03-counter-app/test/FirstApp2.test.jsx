import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp />', () => {

    const title = 'Soy un title'
    const sub = 'Soy un sub'

    test('should match con snapshot', () => {

        const { container } = render(<FirstApp title={title} />)

        expect(container).toMatchSnapshot()
    })

    test('should  mostrar msj "Soy un title"', () => {

        render(<FirstApp title={title} />)
        expect(screen.getByText(title)).toBeTruthy()
        //screen.debug()
    })

    test('should de tener el titulo en h1', () => {

        render(<FirstApp title={title} />)

        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title)

    })

    test('should mostrar subs enviado por props', () => {
        render(
            <FirstApp
                title={title}
                subTitle={sub}
            />)

        expect(screen.getAllByText(sub).length).toBe(2)

    })

})
