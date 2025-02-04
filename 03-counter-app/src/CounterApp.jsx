import { useState } from "react"
import PropTypes from "prop-types"

export const CounterApp = ({ value }) => {

    const [count, setCount] = useState(value)

    const handleAdd = () => { setCount(count + 1) }
    const handleSubstract = () => { setCount(count - 1) }
    const handleRest = () => { setCount(value) }

    return (
        <>
            <h1>Counter App</h1>
            <h2>{count}</h2>

            <button aria-label='btn-add' onClick={handleAdd}> +1 </button>
            <button aria-label='btn-subst' onClick={handleSubstract}> -1 </button>
            <button aria-label='btn-reset' onClick={handleRest}> Reset </button>
        </>
    )
}

CounterApp.prototype = {
    value: PropTypes.number.isRequired,
}