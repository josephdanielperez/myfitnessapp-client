import { resetLoginForm } from './loginForm.js'

export const setCurrentUser = user => {
    return {
        type: 'SET_CURRENT_USER',
        user
    }
}

export const clearCurrentUser = () => {
    return {
        type: 'CLEAR_CURRENT_USER'
    }
}

export const login = (userData) => {
    return dispatch => {
        return fetch('http://localhost:3000/login', {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        })
        .then(resp => console.log(resp))
        .then(user => {
            if (user.error) {
                alert(user.error)
                console.log('failure', user)
            } else {
                dispatch(setCurrentUser(user))
                dispatch(resetLoginForm())
                console.log('success', user)
            }
        })
        .catch(console.log())
    }
}

// see all users //
export const fetchUsers = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then(users => dispatch({ type: 'FETCH_USERS', payload: users}))
    }
}

// create user //
export const addUser = user => {
    return dispatch => {
        fetch('http://localhost:3000/users', {
            method: 'POST',
            body: JSON.stringify({user}),
            headers: {'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(user => dispatch({ type: 'ADD_USER', payload: user}))
    }
}