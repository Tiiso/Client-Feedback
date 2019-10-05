import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    renderContent() {
       switch (this.props.auth) {
           case null:
               return;
           case false:
               return <li><a href="/auth/google">Login with Google</a></li>;
           default:
               return <li><a href="/api/logout">Logout</a></li>;
       }
    }
    render() {
        console.log(this.props);
        return (
        <nav>
            <div className="nav-wrapper">
            <a href="#" class="left-brand-logo">Logo</a>
            <ul className="right">
               {this.renderContent()}
            </ul>
            </div>
        </nav>
        );
    }
}

function mapStateProps({ auth }) {
    return { auth };
}

export default connect(mapStateProps) (Header);