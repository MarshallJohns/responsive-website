import React, { Component } from 'react'
import './navbar.css'

export default class NavBar extends Component {
    constructor() {
        super()
        this.state = {
            display: false
        }

        this.handleDisplay = this.handleDisplay.bind(this)
    }

    handleDisplay() {
        this.setState({ display: !this.state.display })
    }



    render() {
        return (
            <div>
                <header className='header'>
                    <nav className='navbar'>
                        <h2 className='app-name'><a><img src='https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg' /></a></h2>

                        <div className='navbar-icon' onClick={() => this.handleDisplay()}>MENU &#9776; </div>

                        <div className='button-container'>
                            <button className='navbar-button'>Services</button>
                            <button className='navbar-button'>portfolio</button>
                            <button className='navbar-button'>about</button>
                            <button className='navbar-button'>team</button>
                            <button className='navbar-button'>contact</button>
                        </div>

                        <div className={this.state.display ? 'dropdown' : 'hidden'}>
                            <button className='navbar-button'>Services</button>
                            <button className='navbar-button'>portfolio</button>
                            <button className='navbar-button'>about</button>
                            <button className='navbar-button'>team</button>
                            <button className='navbar-button'>contact</button>
                        </div>

                    </nav>
                </header>
            </div>
        )
    }
}