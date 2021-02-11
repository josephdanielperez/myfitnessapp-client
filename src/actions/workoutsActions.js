const generatedWorkout = []

export async function fetchUsers(split, length) {
    const resp = await fetchSplits(split)
    return (dispatch) => {
        fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then(users => dispatch({ type: 'FETCH_USERS', payload: users}))
    }
}

export function fetchSplits(split) {
    fetch(`http://localhost:3000/splits`)
    .then(resp => resp.json())
    .then(splits => {
        for (const split of splits){
            if (split.name === split) {
                //let x = new Split(split.id, split.name);
                //x.filterId();
                console.log(split)
            }
        }
    })
}

export const fetchExercises = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then(users => dispatch({ type: 'FETCH_USERS', payload: users}))
    }
}