import PropTypes from 'prop-types';
import cn from 'classnames'
import './Dropdown.scss';

const Dropdown = ({ options = [], value, onChange, className, disabled }) => {
  return !!options.length && (
    <select value={ value } 
      onChange={ onChange } 
      disabled={disabled} 
      className={cn('dropdown', className, {
        'dropdown--disabled': disabled
      })}
    >
      { 
        options.map(({ label, value: itemValue }) => 
          <option key={ itemValue } value={ itemValue }>{ label }</option>
        )
      }
    </select>
  )
}

Dropdown.propTypes = {
  options: PropTypes.array,
  value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  onChange: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool
}

export default Dropdown;
