import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Hamburger extends Component {
    state = {
        show: false,
    }

    toggle = () => {
        this.setState({
            show: !this.state.show
        })
    }
    render() {
        return (
            <div>
                {this.state.show && (
                    <ul className="mobile-nav">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/about'}>About</NavLink></li>
                        <li><NavLink to={'/favourites'}>Favourites</NavLink></li>
                    </ul>
                )}
                <button className="hamburger-btn" onClick={this.toggle}>Menu</button>
            </div>
        )
    }
}