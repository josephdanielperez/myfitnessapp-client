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

export const fetchSplitExercises = (split) => {
    let data = []
    fetch(`http://localhost:3000/splits/${split}`)
    .then(resp => resp.json())
    .then(split =>
        data.push(split.exercises)
    )
    return data
}

export const filterExercises = (split, length) => {
    let data = []
    fetch(`http://localhost:3000/splits/${split}`)
    .then(resp => resp.json())
    .then(split => {
        let currentIndex = split.exercises.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = split.exercises[currentIndex];
            split.exercises[currentIndex] = split.exercises[randomIndex];
            split.exercises[randomIndex] = temporaryValue;
        }
        split.exercises.slice(0, length).forEach(exercise => data.push(exercise));
    })
    return data
}