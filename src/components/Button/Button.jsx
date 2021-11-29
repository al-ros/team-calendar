import PropTypes from 'prop-types'
import cn from 'classnames'
import './Button.scss'

const Button = ({ onClick, label, className, disabled, block, ...rest }) =>
    <button disabled={ disabled } 
        className={ cn('button', className, {
            'button--disabled': disabled,
            'button--block': block 
        }) }
        onClick={ onClick }
        { ...rest }
    >{ label }</button>

Button.propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    block: PropTypes.bool
}

export default Button
