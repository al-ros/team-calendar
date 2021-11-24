import PropTypes from 'prop-types'
import cn from 'classnames'
import './Button.scss'

const Button = ({onClick, label, className, disabled}) =>
    <button disabled={disabled} className={cn('button', className, {
        'button--disabled': disabled 
    })} onClick={onClick}>{label}</button>

Button.propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool
}

export default Button
