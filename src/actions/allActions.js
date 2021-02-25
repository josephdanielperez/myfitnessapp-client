export const fetchSplits = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_EXERCISES' });

        fetch('http://localhost:3000/splits')
        .then(resp => resp.json())
        .then(splits => 
            dispatch({type: 'FETCH_SPLITS', payload: splits})
        )
    }
}