import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Join from './components/Join/Join.js'
import Chat from './components/Chat/Chat.js'

export default function app() {
    return (
        <Router>
              <Route path="/" exact component={Join}/>
              <Route path="/chat" exact component={Chat}/>
        </Router>
    )
}
