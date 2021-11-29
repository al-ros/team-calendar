import PropTypes from 'prop-types'
import cn from 'classnames'
import './TextField.scss'

const TextField = ({className, disabled, value, onChange, block, ...rest}) =>
    <input disabled={disabled} 
        className={cn('text-field', className, {
            'text-field--disabled': disabled,
            'text-field--block': block
        })} 
        value={value} 
        onChange={onChange} 
        {...rest}
    />

TextField.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    block: PropTypes.bool,
    label: PropTypes.string,
    onChange: PropTypes.func
}

export default TextField
