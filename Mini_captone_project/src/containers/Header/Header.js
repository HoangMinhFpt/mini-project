import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Account from "../../components/Account/Account";
import * as actions from "../../store/actions";
import "./Header.scss";

class Header extends Component {
  render() {
    console.log("check token:", localStorage.getItem("setToken"));
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
            {localStorage.getItem("setToken") === null ? (
              <button className="btn-login">
                <Link to="/login">Đăng nhập</Link>
              </button>
            ) : (
              <div>
                <Account />
              </div>
            )}
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
