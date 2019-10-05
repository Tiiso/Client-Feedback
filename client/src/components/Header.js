import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
        <nav>
            <div className="nav-wrapper">
            <a href="#" class="left-brand-logo">Logo</a>
            <ul className="right">
            <li><a href="">login with Google</a></li>
            </ul>
            </div>
        </nav>
        );
    }
}

export default Header;