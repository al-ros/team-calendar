import { createContext } from 'react'

const UsersContext = createContext({
    USERS: [],
    user: null,
    isOpenAuth: Boolean
}
)

export default UsersContext
