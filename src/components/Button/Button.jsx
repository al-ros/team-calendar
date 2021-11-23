import './Button.css'
import PropTypes from 'prop-types'

const Button = ({onClick, label, className}) =>
    <button className={`button ${className}`} onClick={onClick}>{label}</button>

Button.propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.string,
    className: PropTypes.string
}

export default Button
