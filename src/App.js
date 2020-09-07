import React from 'react'
import { registerRootComponent } from 'expo'

import Router from './router'

function App() {
  return <Router />
}

export default registerRootComponent(App)
