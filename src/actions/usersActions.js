export const setCurrentUser = user => {
    return {
        type: 'SET_CURRENT_USER',
        user
    }
}

// export const clearCurrentUser = () => {
//     return {
//         type: 'CLEAR_CURRENT_USER'
//     }
// }

export const login = (credentials, history) => {
    return dispatch => {
        // can abstract fetch requests into an adapter class and do something like - return Adapter.login(args) or API.login(args)
        fetch('http://localhost:3000/login', {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then(resp => resp.json())
        .then(json => {
            if (json.error) {
                alert(json.error)
            } else {
                dispatch(setCurrentUser(json.data))
                // dispatch(getWorkouts())
                history.push('/')
            }
        })
        .catch(console.log())
    }
}

// export const getCurrentUser = () => {
//     return dispatch => {
//         fetch(targetUrl + '/get_current_user', {
//             credentials: 'include',
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//         })
//         .then(resp => resp.json())
//         .then(json => {
//             if (json.error) {
//                 console.log(json.error)
//             } else {
//                 dispatch(setCurrentUser(json.data))
//                 // dispatch(getWorkouts())
//             }
//         })
//         .catch(console.log())
//     }
// }

export const fetchUsers = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then(users => dispatch({ type: 'FETCH_USERS', payload: users}))
    }
}

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