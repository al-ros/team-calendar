import PropTypes from 'prop-types';
import cn from 'classnames'
import './Dropdown.scss';

const Dropdown = ({ options = [], value, onChange, className, disabled, block, isAuth, ...rest }) => {

  return !!options.length && (
    <select value={ value } 
      onChange={ onChange } 
      disabled={disabled} 
      // isAuth={ isAuth } <-- do we need it?
      className={cn('dropdown', className, {
        'dropdown--disabled': disabled,
        'dropdown--block': block
      })}
      { ...rest }
    >
      { 
        console.log(isAuth),  // why after closing isAuth is 'undefined'
        options.map(({ label, value: itemValue}) => {
          if (label === 'All users' && isAuth) {
            return null
            } else {
            return <option key={ itemValue + label } value={ itemValue }>{ label }</option>}
             }
        )
      }
    </select>
  )
}

const valueType = PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]);

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: valueType,
    value: valueType
  })),
  value: valueType,
  onChange: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  block: PropTypes.bool
}

export default Dropdown;
