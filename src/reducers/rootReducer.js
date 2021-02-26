export const rootReducer = (state = { splits: [], exercises: [] }, action) => {

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
        case 'LOADING_EXERCISES':
            return {
                ...state,
                exercises: [...state.exercises],
            }

        case 'FETCH_EXERCISES':
            return {
                ...state,
                exercises: action.payload,
            }

        default:
            return state
    }
}

export default rootReducer;