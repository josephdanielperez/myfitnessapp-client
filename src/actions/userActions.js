// SIGNUP FORM ACTIONS //
export const updateSignupForm = (formData) => {
    return {
        type: 'UPDATE_SIGNUP_FORM',
        formData
    }
}
  
export const resetSignupForm = () => {
    return {
        type: 'RESET_SIGNUP_FORM'
    }
}

// LOGIN FORM ACTIONS //
export const updateLoginForm = (formData) => {
    return {
        type: 'UPDATE_LOGIN_FORM',
        formData
    }
}
  
export const resetLoginForm = () => {
    return {
        type: 'RESET_LOGIN_FORM'
    }
}

// CURRENT USER ACTIONS //
export const setCurrentUser = (user) => {
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

export const login = (credentials, history) => {
    return dispatch => {
        return fetch('http://localhost:3000/users', {
        credentials: "include",
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
        })
        //Then we check for an error. 
        //If an error happend we throw it and call our error function. If everything went okay, we call the success action.
        //The reducer handles the rest
        .then(resp => resp.json())
        .then(response => {
            //console.log(response)
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(setCurrentUser(response.data))
                dispatch(resetLoginForm())
                history.push('/')
            }
        })
    }
}
  
export const signup = (data) => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_USER' })
        return fetch('http://localhost:3000/users', {
            method: 'POST',
            mode: 'cors',
            // credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ user: data })
        })
        .then(resp => resp.json())
        .then(user => {
            dispatch({ type: 'LOGIN_USER', payload: user })
            // dispatch(getCurrentUser())
        })
    }
}
  
  
export const logout = (e) => {
    return dispatch => {
        dispatch(clearCurrentUser())
        return fetch('http://localhost:3000/users', {
            credentials: "include",
            method: "DELETE"
        })
    }
}
  
export const getCurrentUser = () => {
    return dispatch => {
        return fetch("http://localhost:3000/users", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(resp => resp.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(setCurrentUser(response.data))
            }
        })
    }
}