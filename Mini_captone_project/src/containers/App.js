import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter as Router } from "connected-react-router";
import { history } from "../redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { userIsAuthenticated } from "../hoc/authentication";
import { path } from "../utils";
import Home from "../routes/Home";
import Login from "./Auth/Login.js";
import Register from "./Auth/Register";
import System from "../routes/System";
import Homepage from "../views/Homepage";
import Service from "../views/Service";
import DetailProfile from "../views/DetailProfile";
import Booking from "../views/Booking";
import ChangePassword from "../views/ChangePassword";

class App extends Component {
  // handlePersistorState = () => {
  //   const { persistor } = this.props;
  //   let { bootstrapped } = persistor.getState();
  //   if (bootstrapped) {
  //     if (this.props.onBeforeLift) {
  //       Promise.resolve(this.props.onBeforeLift())
  //         .then(() => this.setState({ bootstrapped: true }))
  //         .catch(() => this.setState({ bootstrapped: true }));
  //     } else {
  //       this.setState({ bootstrapped: true });
  //     }
  //   }
  // };

  render() {
    return (
      <Fragment>
        <Router history={history}>
          <div className="main-container">
            {/* {this.props.isLoggedIn} */}

            <span className="content-container">
              <Switch>
                <Route path={path.HOME} exact component={Home} />
                <Route
                  path={path.SYSTEM}
                  component={userIsAuthenticated(System)}
                />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/homepage" component={Homepage} />
                <Route path="/service" component={Service} />
                <Route
                  path="/account/change-password"
                  component={ChangePassword}
                />
                <Route
                  path="/account/detail-profile"
                  component={DetailProfile}
                />
                <Route path="/account/booking" component={Booking} />
              </Switch>
            </span>
            <ToastContainer />
          </div>
        </Router>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    started: state.app.started,
    // isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
