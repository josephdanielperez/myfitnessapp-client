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