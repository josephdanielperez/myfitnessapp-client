export const fetchSplits = () => {
    return dispatch => {
        dispatch({ type: 'LOADING_SPLITS' })

        return fetch('http://localhost:3000/splits')
        .then(resp => resp.json())
        .then(splits => 
            dispatch({type: 'FETCH_SPLITS', payload: splits})
        )
    }
}

export const checkLoginStatus = () => {
    return dispatch => {
        return fetch('http://localhost:3000/logged_in', {
            credentials: 'include',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(json => {
            if (json.logged_in) {
                dispatch({ type: 'FETCH_LOGIN', payload: json.user.username })
            } else {
                dispatch({ type: 'LOGOUT' })
            }
        })
    }
}


export const fetchRegistration = (data) => {
    return dispatch => {
        fetch('http://localhost:3000/registrations', {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(json => {
            if (json.status === 'created') {
                dispatch({ type: 'FETCH_LOGIN', payload: json.user.username })
            } else {
                alert('Username is either taken or password fields did not match. Please try again.')
            }
        })
    }
}

export const fetchLogin = (data) => {
    return dispatch => {
        dispatch({ type: 'LOADING_LOGIN' })

        return fetch('http://localhost:3000/sessions', {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(json => {
            if (json.logged_in) {
                dispatch({ type: 'FETCH_LOGIN', payload: json.user.username })
            } else {
                alert('invalid credentials, please try again')
            }
        })
    }
}

export const fetchLogout = () => {
    return dispatch => {
        return fetch('http://localhost:3000/logout', {
            credentials: 'include',
            method: 'DELETE'
        })
        .then(resp => {
            dispatch({ type: 'LOGOUT' })
        })
    }
}