export const fetchSplits = () => {
    return async dispatch => {
        dispatch({ type: 'LOADING_SPLITS' })

        const resp = await fetch('http://localhost:3000/splits')
        const splits = await resp.json()
        return dispatch({ type: 'FETCH_SPLITS', payload: splits })
    }
}

// export const fetchWorkout = (split, length) => {
//     let workout = []

//     fetch(`http://localhost:3000/splits/${split}`)
//     .then(resp => resp.json())
//     .then(split => {
//         let currentIndex = split.exercises.length;
//         let temporaryValue, randomIndex;
//         while (0 !== currentIndex) {
//             randomIndex = Math.floor(Math.random() * currentIndex);
//             currentIndex -= 1;

//             temporaryValue = split.exercises[currentIndex];
//             split.exercises[currentIndex] = split.exercises[randomIndex];
//             split.exercises[randomIndex] = temporaryValue;
//         }
//         split.exercises.slice(0, length).forEach(exercise => workout.push(exercise));
//     })
//     return workout
// }

export const checkLoginStatus = () => {
    return async dispatch => {
        const resp = await fetch('http://localhost:3000/logged_in', {
            credentials: 'include',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            }
        })
        const json = await resp.json()
        if (json.logged_in) {
            dispatch({ type: 'FETCH_LOGIN', payload: json.user.username })
        } else {
            dispatch({ type: 'LOGOUT' })
        }
    }
}

export const fetchRegistration = (data) => {
    return async dispatch => {
         const resp = await fetch('http://localhost:3000/registrations', {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const json = await resp.json()
        if (json.status === 'created') {
            dispatch({ type: 'FETCH_LOGIN', payload: json.user.username })
        } else {
            alert('Username is either taken or password fields did not match. Please try again.')
        }
    }
}

export const fetchLogin = (data) => {
    return async dispatch => {
        dispatch({ type: 'LOADING_LOGIN' })

        const resp = await fetch('http://localhost:3000/sessions', {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const json = await resp.json()
        if (json.logged_in) {
            dispatch({ type: 'FETCH_LOGIN', payload: json.user.username })
        } else {
            alert('invalid credentials, please try again')
        }
    }
}

export const fetchLogout = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/logout', {
            credentials: 'include',
            method: 'DELETE'
        })
        dispatch({ type: 'LOGOUT' })
    }
}