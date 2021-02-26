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

export const fetchExercises = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_EXERCISES' })

        return fetch('http://localhost:3000/exercises')
        .then(resp => resp.json())
        .then(exercises => 
            dispatch({type: 'FETCH_EXERCISES', payload: exercises})
        )
    }
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