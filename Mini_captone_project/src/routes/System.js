import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import DetailProfile from "../views/DetailProfile";
import EditProfile from "../views/EditProfile";
class System extends Component {
  render() {
    const { systemMenuPath } = this.props;
    return (
      <div className="system-container">
        <div className="system-list">
          {/* <Sidebar> */}
          <Switch>
            {/* <Route path="/system/cabinet" component={Cabinet} />
              <Route path="/system/order" component={Order} />
              <Route path="/system/user-manage" component={UserManage} />
              <Route path="/system/user-detail" component={DetailUser} />
              <Route path="/system/user-detail/:id" component={DetailUser} />
              <Route path="/system/history" component={History} />
              <Route path="/system/box" component={Box} /> */}
            {/* <Route path="/system/homepage" component={Homepage} />
            <Route path="/system/service" component={Service} /> */}
            <Route path="/account/edit-profile" component={EditProfile} />
            <Route path="/account/detail-profile" component={DetailProfile} />
            <Route
              component={() => {
                return <Redirect to={systemMenuPath} />;
              }}
            />
          </Switch>
          {/* </Sidebar> */}
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
