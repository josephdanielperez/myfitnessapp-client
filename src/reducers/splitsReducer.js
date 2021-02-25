export const splitsReducer = (state = {
    splits: []
} ,action) => {
    switch(action.type){
        case 'FETCH_SPLITS':
            return action.payload
        default:
            return state
    }
}

export default splitsReducer;