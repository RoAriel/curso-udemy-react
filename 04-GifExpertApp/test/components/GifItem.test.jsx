import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en GiftItem', () => {

    const title = 'One Piece'
    const url = 'https://luffy-dono.com/'

    test('should match snapshot', () => {
    const {container} = render(<GifItem title={title} url={url}/>)

    expect(container).toMatchSnapshot()
  })

  test('should  mostar la img con el URL y el ALT indicado', () => {
    
    render(<GifItem title={title} url={url}/>)
    
    const {src, alt} = screen.getByRole('img')

    expect(src).toBe(url)
    expect(alt).toBe(title)

  })

  test('should mostrar el titulo', () => {
    
    render(<GifItem title={title} url={url}/>)

    expect(screen.getByText(title)).toBeTruthy();
    
  })
  
  
  
})
