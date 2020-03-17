import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/header'
import Home from './components/home'
import Footer from './components/footer'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default Routes
