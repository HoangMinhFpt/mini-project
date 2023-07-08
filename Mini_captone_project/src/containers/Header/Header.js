import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../store/actions";
import "./Header.scss";

class Header extends Component {

  render() {
    return (
      <div className="header-container">
        <div className="header-content">
          <div className="header-left-content">
            <Link to="/system/homepage">
              <i className="fas fa-home"></i>
            </Link>
          </div>
          <div className="header-center-content title">
            <div className="home-content">
              <Link to="/homepage">Home</Link>
            </div>
            <div className="service-content">
              <Link to="/service">Dịch vụ</Link>
            </div>
          </div>
          <div className="header-right-content">
            <button className="btn-login">
              <Link to="/login">
                Đăng nhập
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processLogout: () => dispatch(actions.processLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
