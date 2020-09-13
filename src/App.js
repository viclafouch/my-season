import React from 'react'
import { ThemeProvider } from 'react-native-elements'
import { registerRootComponent } from 'expo'

import Router from './router'
import AutoCompleteProvider from './stores/AutoCompleteContext'

function App() {
  return (
    <ThemeProvider>
      <AutoCompleteProvider>
        <Router />
      </AutoCompleteProvider>
    </ThemeProvider>
  )
}

export default registerRootComponent(App)
