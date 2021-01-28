import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// This component toggles the mobile menu on and off
export default class Hamburger extends Component {
    // set the state to false so menu does not show
    state = {
        show: false,
    }
    // made function toggle to corrrelate to the button, which makes show=true and displays the <ul>
    toggle = () => {
        this.setState({
            show: !this.state.show
        })
    }
    // Closes the <ul> after menu item is clicked for new page
    close = () => {
        this.setState({
            show: !this.state.show
        })
    }
    render() {
        return (
            <div className="mobile-nav">
                <button className="hamburger-btn" onClick={this.toggle}><i className="fas fa-bars"></i></button>
                {this.state.show && (
                    <ul>
                        <li><NavLink to={'/'} onClick={this.close}><h3>Home</h3></NavLink></li>
                        <li><NavLink to={'/about'} onClick={this.close}><h3>About</h3></NavLink></li>
                        <li><NavLink to={'/favourites'} onClick={this.close}><h3>Favourites</h3></NavLink></li>
                    </ul>
                )}
            </div>
        )
    }
}