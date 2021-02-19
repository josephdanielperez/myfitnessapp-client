export const workoutsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_WORKOUTS':
            return action.payload
        case 'ADD_WORKOUT':
            return [...state, action.payload]
        case 'FETCH_SPLITS':
            return action.payload
        case 'ADD_SPLIT':
            return [...state, action.payload]
        default:
            return state
    }
}