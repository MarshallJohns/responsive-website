import React, { Component } from 'react'
import './App.css'
import './reset.css'
import NavBar from './components/NavBar'
import First from './components/First'

export default class App extends Component {



  render() {
    return (

      <div>
        <First />
        <NavBar />
      </div>
    )

  }
}