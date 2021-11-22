import PropTypes from 'prop-types';
import './Dropdown.css';

const Dropdown = ({ options = [], value, onChange }) => {
  return !!options.length && (
    <select value={ value } onChange={ onChange } className="dropdown">
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
  onChange: PropTypes.func
}

export default Dropdown;
