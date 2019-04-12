import {createActions, createReducer} from 'reduxsauce'
import Immutable from "seamless-immutable";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startup: null,
  setStartupStatus: ['startupState']
})

export const StartupTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  startupStatus: false
}

/* ------------- Selectors ------------- */

export const StartupSelectors = {

}

/* ------------- Reducers ------------- */
// failed to get the avatar
export const setStartupStatus = (state, { startupState }) =>
  ({...state, startupStatus: startupState })


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [StartupTypes.SET_STARTUP_STATUS]: setStartupStatus
})
