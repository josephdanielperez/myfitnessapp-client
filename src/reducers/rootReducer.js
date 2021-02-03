import { combineReducers } from 'redux'

import { usersReducer } from './usersReducer'
import { workoutsReducer } from './workoutsReducer'
import { splitsReducer } from './splitsReducer'
import {exercisesReducer } from './exercisesReducer'

export const rootReducer = combineReducers({
    users: usersReducer,
    workouts: workoutsReducer,
    splits: splitsReducer,
    exercises: exercisesReducer,
})