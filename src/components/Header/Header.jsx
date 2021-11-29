import { useContext } from 'react'
import Button from '../Button/Button'
import Dropdown from '../Dropdown/Dropdown'
import PropTypes from 'prop-types'
import UsersContext from '../../contexts/UsersContext'
 import './Header.scss'

const Header = ({onClickNewEvent, filterValue, onFilterChange}) => {
    const { USERS } = useContext(UsersContext)    
    return (
        <header className="header">
            <h1 className="header__title">Calendar</h1>
            <Dropdown className="header__filter" options={USERS} 
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

