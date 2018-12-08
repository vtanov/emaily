import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Landing";

// const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>Survey New</h2>;
// const Landing = () => <h2>Landing</h2>;

// MUST REFACTOR THES Component => we care about checking if the user is loggedin
// ONLY at the time when app is rebooted !!!!!!
// const App = () => {
//   return (
//     <div className="container">
//       <BrowserRouter>
//         <div>
//           <Header />
//           <Route exact path="/" component={Landing} />
//           <Route exact path="/surveys" component={Dashboard} />
//           <Route path="/surveys/new" component={SurveyNew} />
//         </div>
//       </BrowserRouter>
//     </div>
//   );
// };
// CLASS BASED:
class App extends Component {
  // add on a lyfecycle method
  // to fetch the current user => signed in or not
  componentDidMount() {
    // wire this to recieve action creators form the redux:
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <main>
              <div className="container">
                <Route exact path="/" component={Landing} />
                <Route exact path="/surveys" component={Dashboard} />
                <Route exact path="/surveys/new" component={SurveyNew} />
              </div>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
