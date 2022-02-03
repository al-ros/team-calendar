import PropTypes from 'prop-types';
import cn from 'classnames'
import './Dropdown.scss';
import UsersContext from '../../contexts/UsersContext';
import { useContext } from 'react';

const Dropdown = ({ options = [], value, onChange, className, disabled, block, ...rest }) => {
  const { isOpenAuth} = useContext(UsersContext)

  return !!options.length && (
    <select value={ value } 
      onChange={ onChange } 
      disabled={disabled} 
      className={cn('dropdown', className, {
        'dropdown--disabled': disabled,
        'dropdown--block': block
      })}
      { ...rest }
    >
      { 
        options.map(({ label, value: itemValue }) => {
          if (label === 'All users' && isOpenAuth) {
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
