import PropTypes from "prop-types"

export const FirstApp = ({ title = 'No title', subTitle = 'No sub', name }) => {

    return (
        <>
            <h1 data-testid='test-title'>{title}</h1>
            <p>{subTitle}</p>
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
    )
}

FirstApp.prototype = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}
