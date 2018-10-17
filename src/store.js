import { createStore } from 'redux'

//this sets the state for the reducer and thus the store
const initialState = {
  //modes are add, subtract, multiply, divide, save, and show
  mode: null,
  //prevMode is useful when we're using Memory Retrieval
  prevMode: null,
  //a is the first number entered
  a: "0",
  //b is the second number entered. after the second number is entered and calculated, it becomes a and b is reset to 0
  b: "0",
  //numbers saved in the calculator
  saved: {}
}

//action type variables keep typo-related errors to a minimum
export const SET_MODE = 'SET_MODE'
export const SET_FIRST_NUMBER = 'SET_FIRST_NUMBER'
export const SET_SECOND_NUMBER = 'SET_SECOND_NUMBER'
export const SAVE_NUMBER = 'SAVE_NUMBER'

//the calculator reducer
const calculator = (state = initialState, action) => {
  switch (action.type){
    case SET_MODE:
    return {
      ...state,
      prevMode: state.mode,
      mode: action.payload,
    }
    case SET_FIRST_NUMBER:
    return {
      ...state,
      a: action.payload
    }
    case SET_SECOND_NUMBER:
    return {
      ...state,
      b: action.payload
    }
    case SAVE_NUMBER:
    return {
      ...state,
      saved: {
        ...state.saved,
        [action.payload.reference]: action.payload.number
      }
    }
    default:
    return state
  }
}

//creating and exporting the store to give to the provider in index.js
const store = createStore(calculator)
export default store

//action creators that trigger transformations in the redux store using previously-declared action types
export const setMode = (mode) => {
  return {type: SET_MODE, payload: mode}
}

export const setFirstNumber = (number) => {
  return {type: SET_FIRST_NUMBER, payload: number}
}

export const setSecondNumber = (number) => {
  return {type: SET_SECOND_NUMBER, payload: number}
}

export const saveNumber = (reference, number) => {
  return {type: SAVE_NUMBER, payload: {reference, number}}
}
