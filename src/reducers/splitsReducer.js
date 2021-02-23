export const splitsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_SPLITS':
            return action.payload
        default:
            return state
    }
}