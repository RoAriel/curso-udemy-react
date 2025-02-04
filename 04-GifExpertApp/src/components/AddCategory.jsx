import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('One Piece')

  const onInputChange = (event) => {

    setInputValue(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()

    const newInputValue = inputValue.trim()

    if (newInputValue.length <= 1) return

    onNewCategory(newInputValue)
    setInputValue('')
 
  }

  return (
    <form onSubmit={ onSubmit }>
      <input type="text"
        placeholder="Buscar gif"
        value={ inputValue }
        onChange={ onInputChange } />
    </form>

  )
}