export const splitsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_SPLITS':
            return action.payload
        case 'ADD_SPLIT':
            return [...state, action.payload]
        default:
            return state
    }
}