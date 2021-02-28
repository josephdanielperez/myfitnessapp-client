export const createUser = (data) => {
    
    return async (dispatch) => {
        dispatch({ type: 'LOADING_USER' })

        const response = await fetch('http://localhost:3000/users', {
            mode:'cors',
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({user: data})
       })
 
       const user_obj = await response.json()
       const user = user_obj.data
       dispatch({ type: 'LOGIN_USER', payload: user })
       dispatch(getCurrentUser())
    }

}
 
export const loginUser = (data) => {
    return async (dispatch) => {
        dispatch({type: 'LOADING_USER'})
        
        const response = await fetch('http://localhost:3000/login', {
            mode: 'cors',
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({user: data})
        })

        const user_obj = await response.json()
    
        dispatch({type: 'LOGIN_USER', payload: user_obj})
    }

}
 
export const getCurrentUser = () => {
    return async (dispatch) => {
        dispatch({type: 'LOADING_USER'})
        
        const response = await fetch('http://localhost:3000/current-user', {
            mode: 'cors',
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        
        const user_obj = await response.json()

        dispatch({type: 'LOGIN_USER', payload: user_obj})
    }

}
 
export const logoutUser = () => {
    return async (dispatch) => {
        await fetch('http://localhost:3000/logout', {
            mode: 'cors',
            method: 'DELETE',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
       })

       dispatch({type: 'LOGOUT_USER'})
    }

}