import { createContext } from 'react'

const UsersContext = createContext({
    USERS: [],
    user: null
}
)

export default UsersContext
