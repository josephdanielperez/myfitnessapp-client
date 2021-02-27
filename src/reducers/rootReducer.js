export const rootReducer = (state = { splits: [] }, action) => {

    switch(action.type) {
        case 'LOADING_SPLITS':
            return {
                ...state,
                splits: [...state.splits],
            }

        case 'FETCH_SPLITS':
            return {
                ...state,
                splits: action.payload,
            }

        default:
            return state
    }
}

export default rootReducer;