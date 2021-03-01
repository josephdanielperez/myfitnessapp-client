export const fetchSplits = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_SPLITS' })

        return fetch('http://localhost:3000/splits')
        .then(resp => resp.json())
        .then(splits => 
            dispatch({type: 'FETCH_SPLITS', payload: splits})
        )
    }
}

export const fetchLogin = (data) => {
    console.log('just here')
    return dispatch => {
        console.log('we are here')
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
            console.log('this', json)
            if (json.logged_in) {
                // this.props.handleSuccessfulAuth(json)
                dispatch({ type: 'FETCH_LOGIN', payload: json.user.username })
                // this.props.history.push('/dashboard')
            } else {
                alert('invalid credentials, please try again')
            }
        })
    }
}