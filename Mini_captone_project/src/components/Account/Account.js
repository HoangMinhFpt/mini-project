import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Account.scss";
import { getAccountProfile } from "../../services/userService";

class Account extends Component {
  handleLogout = () => {
    localStorage.removeItem("setToken");
  };

  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
    };
  }

  async componentDidMount() {
    await this.getProfilesFromReact();
  }

  getProfilesFromReact = async () => {
    let response = await getAccountProfile(localStorage.getItem("setToken"));
    this.setState({
      fullName: response.data.fullName,
    });
  };

  render() {
    return (
      <div className="account-content">
        <div className="btn-group">
          <button
            type="button"
            className="btn me-1 btn-account"
            aria-expanded="false"
            aria-label="Profile"
            data-bs-toggle="dropdown"
          >
            Hello, {this.state.fullName}
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
                <i className="fas fa-history text-info" /> Lịch sử đặt lịch
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
