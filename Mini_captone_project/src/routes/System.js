import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import DetailProfile from "../views/DetailProfile";
import EditProfile from "../views/ChangePassword";
import ChangePassword from "../views/ChangePassword";
import Booking from "../views/Booking";
import HistoryBooking from "../views/HistoryBooking";
class System extends Component {
  render() {
    const { systemMenuPath } = this.props;

    return (
      <div className="system-container">
        <div className="system-list">
          <Switch>
            <Route path="/account/edit-profile" component={EditProfile} />
            <Route path="/account/detail-profile" component={DetailProfile} />
            <Route path="/account/change-password" component={ChangePassword} />
            <Route path="/account/booking" component={Booking} />
            <Route path="/account/history-booking" component={HistoryBooking} />
            <Route
              component={() => {
                return <Redirect to={systemMenuPath} />;
              }}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    systemMenuPath: state.app.systemMenuPath,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
