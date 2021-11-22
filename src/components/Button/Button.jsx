import './Button.css'

const Button = ({onClick, label}) => {


    return (
        <button className="button" onClick={onClick}>{label}</button>
    )
}

export default Button