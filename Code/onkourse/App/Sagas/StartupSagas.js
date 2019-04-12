import { call, put, select } from 'redux-saga/effects'
import GithubActions, { GithubSelectors } from '../Redux/GithubRedux'
import { is } from 'ramda'
import firebase from "react-native-firebase";
import StartupActions, {StartupSelectors} from "../Redux/StartupRedux";

// exported to make available for tests
export const selectAvatar = GithubSelectors.selectAvatar
export let firebaseDb;

// process STARTUP actions
export function * startup (action) {

  yield put(StartupActions.setStartupStatus(false))

  if (__DEV__ && console.tron) {
    // straight-up string logging
    console.tron.log('Connected to Reactotron...')

  }

  yield call(firebaseDbSetup);


  yield put(StartupActions.setStartupStatus(true))
}

export function * firebaseDbSetup () {
  firebaseDb = yield call(firebase.database)
}
