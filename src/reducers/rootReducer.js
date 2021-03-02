export const rootReducer = (state = { 
    splits: [],
    user: '',
    loggedInStatus: 'NOT_LOGGED_IN'
    }, action) => {

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

        case 'LOADING_LOGIN':
            return {
                ...state,
            }

        case 'FETCH_LOGIN':
            return {
                ...state,
                user: action.payload,
                loggedInStatus: 'LOGGED_IN'
            }

        case 'LOGOUT':
            return {
                user: '',
                loggedInStatus: 'NOT_LOGGED_IN'
            }

        default:
            return state
    }
}

export default rootReducer;