export const setMode = (mode) => {
  return {type: 'SET_MODE', payload: mode}
}

export const setFirstNumber = (number) => {
  return {type: 'SET_FIRST_NUMBER', payload: number}
}

export const setSecondNumber = (number) => {
  return {type: 'SET_SECOND_NUMBER', payload: number}
}

export const saveNumber = (reference, number) => {
  return {type: 'SAVE_NUMBER', payload: {reference, number}}
}
