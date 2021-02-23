import { combineReducers } from 'redux'

import { splitsReducer } from './splitsReducer'
import { exercisesReducer } from './exercisesReducer'

export const rootReducer = combineReducers({
    splits: splitsReducer,
    exercises: exercisesReducer,
})