import Button from '../Button/Button'
import Dropdown from '../Dropdown/Dropdown'
import PropTypes from 'prop-types'
import './Header.scss'

const DROPDOWN_DUMMY_OPTIONS = [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: 3 }
  ]

const Header = ({onClickNewEvent, filterValue, onFilterChange}) => {
    return (
        <header className="header">
            <h1 className="header__title">Calendar</h1>
            <Dropdown className="header__filter" options={DROPDOWN_DUMMY_OPTIONS} 
                value={filterValue}
                onChange={(e) => onFilterChange(e.target.value)} />
            <Button className="header__button" onClick={onClickNewEvent} label="New event +"/>
        </header>
    )
}

Header.propTypes = {
    onClickNewEvent: PropTypes.func,
    filterValue: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    onFilterChange: PropTypes.func
}

export default Header

