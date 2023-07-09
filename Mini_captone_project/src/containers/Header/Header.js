import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Account from "../../components/Account/Account";
import "./Header.scss";
import logo from "../../assets/images/logo_smart.png";

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-content">
          <div className="header-left-content">
            <Link to="/homepage">
              <img src={logo} className="card-img" alt="..." />
            </Link>
          </div>
          <div className="header-center-content title">
            <h2 className="home-content">
              <Link to="/homepage">Home</Link>
            </h2>
            <h2 className="service-content">
              <Link to="/service">Dịch vụ</Link>
            </h2>
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
