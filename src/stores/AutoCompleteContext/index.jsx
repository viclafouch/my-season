import React, { createContext, useContext, useReducer } from 'react'

import reducer from './reducer'

export const AutoCompleteContext = createContext(null)

const initialState = {
  isEditMode: false
}

function AutoCompleteProvider(props) {
  const [state, updater] = useReducer(reducer, initialState)
  return (
    <AutoCompleteContext.Provider value={[state, updater]}>
      {props.children}
    </AutoCompleteContext.Provider>
  )
}

export const useAutoCompleteContext = () => {
  const context = useContext(AutoCompleteContext) || null
  if (context === null) {
    throw new Error('Must be used within a Provider')
  }
  return context
}

export default AutoCompleteProvider
