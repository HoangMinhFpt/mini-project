import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Account.scss";

class Account extends Component {
  handleLogout = () => {
    localStorage.removeItem("setToken");
  };

  render() {
    return (
      <div className="account-content">
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-secondary rounded-circle border me-4 btn-account"
            aria-expanded="false"
            aria-label="Profile"
            data-bs-toggle="dropdown"
          >
            <i className="far fa-user"></i>
          </button>
          <ul className="dropdown-menu">
            <li>
              <Link
                className="dropdown-item account-user"
                to="/account/detail-profile"
              >
                <i className="fas fa-id-badge text-primary" /> Tài khoản của tôi
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/account/change-password">
                <i className="far fa-clipboard text-warning" /> Đổi mật khẩu
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item " to="/history-booking">
                <i class="fas fa-history text-info" /> Lịch sử đặt lịch
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link
                className="dropdown-item"
                to="/homepage"
                onClick={() => {
                  this.handleLogout();
                }}
              >
                <i className="fas fa-sign-out-alt text-danger" /> Đăng xuất
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
