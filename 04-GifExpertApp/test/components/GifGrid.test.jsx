import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs')

describe('Test GifGrid', () => {

  const category = 'One Piece'

  test('should mostrar el loading', () => {

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    })

    render(<GifGrid category={category} />)

    expect(screen.getByText('Cargando...'))
    expect(screen.getByText(category))

  })

  test('should mostrar items cuando se cargan las img del useFetchGifs', () => {

    const gifs = [{
      id: 'abc',
      title: 'Luffy',
      url: 'https://1'
    },
    {
      id: 'dfg',
      title: 'Luffy',
      url: 'https://1'
    }
    ]
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: true
    })

    render(<GifGrid category={category} />)
    
    expect(screen.getAllByRole('img').length).toBe(2)

  })


})
