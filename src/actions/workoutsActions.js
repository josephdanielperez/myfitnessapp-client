// synchronous actions //
export const setExercises = exercises => {
    return {
        type: 'SET_EXERCISES',
        exercises
    }
}

export const setSplits = splits => {
    return {
        type: 'SET_SPLITS',
        splits
    }
}

// asynchronous actions //
export const fetchSplits = async () => {
    const data = await fetch('http://localhost:3000/splits', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    const resp = await data.json();
    return resp
}

export const fetchExercises = async () => {
    const data = await fetch('http://localhost:3000/exercises', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    const resp = await data.json();
    return resp
}

export const filterExercises = (state) => {
    let data = []
    fetch('http://localhost:3000/splits/' + state.split)
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
        split.exercises.slice(0, state.length).forEach(exercise => data.push(exercise));
    })
    return data
}

// function generateList(list, length) {
//     let currentIndex = list.length, temporaryValue, randomIndex;
//     while (0 !== currentIndex) {
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex -= 1;

//         temporaryValue = list[currentIndex];
//         list[currentIndex] = list[randomIndex];
//         list[randomIndex] = temporaryValue;
//     }
//     return list.slice(0, length)
// }