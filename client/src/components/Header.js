// Class-based component (that's why with capital "H")
import React, { Component } from "react";
// Hook up Header component to the redux store:
import { connect } from "react-redux";
// import link component
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
  // Helper method:
  renderContent() {
    // use switch statement:
    switch (this.props.auth) {
      // if null:
      case null:
        // return "Still deciding...";
        // cuz of visually seeing return nothing
        return;
      // if false:
      case false:
        return (
          <ul className="right">
            <li key="1">Login:</li>
            <li>
              <a href="/auth/google">Google</a>
            </li>
            <li key="2">
              <a href="/auth/google">
                <i className="material-icons">add</i>
              </a>
            </li>
          </ul>
        );
      // must be logged in
      default:
        return (
          <ul className="right">
            <li key="1">
              <Payments />
            </li>
            <li key="3" style={{ margin: "0 10px" }}>
              Credits: {this.props.auth.credits}
            </li>
            <li key="2">
              <a href="/api/logout">Logout</a>
            </li>
          </ul>
        );
    }
  }

  render() {
    // Check what's happening:
    // console.log(this.props);
    return (
      <header>
        <nav className="green darken-3">
          <div className="nav-wrapper" style={{ margin: "0 10%" }}>
            <Link
              to={this.props.auth ? "/surveys" : "/"}
              className="left brand-logo"
              style={{ margin: "0 20px" }}
            >
              roundaleaf.com
            </Link>
            {this.renderContent()}
          </div>
        </nav>
      </header>
    );
  }
}

// assign the props:
// Refactor:
// function mapStateToProps(state) {
//   return { auth: auth };
// }
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
