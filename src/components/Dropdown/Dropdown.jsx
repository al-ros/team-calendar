import PropTypes from 'prop-types';
import cn from 'classnames'
import './Dropdown.scss';

const Dropdown = ({ options = [], value, onChange, className }) => {
  return !!options.length && (
    <select value={ value } onChange={ onChange } className={cn('dropdown', className)}>
      { 
        options.map(({ label, value: itemValue }) => 
          <option key={ itemValue } value={ itemValue }>{ label}</option>
        )
      }
    </select>
  )
}

Dropdown.propTypes = {
  options: PropTypes.array,
  value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  onChange: PropTypes.func,
  className: PropTypes.string
}

export default Dropdown;
