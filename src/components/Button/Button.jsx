import './Button.css'

const Button = ({onClick, label}) =>
    <button className="button" onClick={onClick}>{label}</button>

export default Button
