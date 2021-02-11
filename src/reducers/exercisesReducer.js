export const exercisesReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_EXERCISES':
            return action.payload
        case 'ADD_EXERCISE':
            return [...state, action.payload]
        default:
            return state
    }
}