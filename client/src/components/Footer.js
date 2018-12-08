import React, { Component } from "react";
//import { connect } from "react-redux";

class Footer extends Component {
  render() {
    return (
      <footer
        className="page-footer"
        style={{
          background: "#2e7d32",
          position: "fixed",
          width: "100%",
          bottom: "0"
        }}
      >
        <div className="container">
          Copyright © 2016 Round A Leaf
          <a className="grey-text text-lighten-4 right" href="#">
            terms and conditions
          </a>
        </div>
        <br />
      </footer>
    );
  }
}

export default Footer;
