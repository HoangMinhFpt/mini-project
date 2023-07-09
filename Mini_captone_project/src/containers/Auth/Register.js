import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import "./Register.scss";
import { FormattedMessage, injectIntl } from "react-intl";
import { handleLoginApi } from "../../services/userService";
import { toast } from "react-toastify";
import bannerImg from "../../assets/images/banner.jpg";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isShowPassword: false,
      Message: "",
    };
  }

  redirectToSystemPage = () => {
    const { navigate } = this.props;
    const redirectPath = "/homepage";
    navigate(`${redirectPath}`);
    toast.success(<FormattedMessage id="toast.login-success" />, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  handleOnChangeUserName = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleOnChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleLogin = async () => {
    this.setState({
      Message: "",
      LoginStatus: "",
    });
    try {
      let data = await handleLoginApi(this.state.username, this.state.password);
      if (data && data.LoginStatus !== 0) {
        this.setState({
          Message: data.Message,
          LoginStatus: data.LoginStatus,
        });
      }
      if (data && data.LoginStatus === 0) {
        this.props.userLoginSuccess(data.admin);
        this.redirectToSystemPage();
      }
    } catch (error) {
      if (error.response) {
        if (error.response.data) {
          this.setState({
            Message: error.response.data.Message,
          });
          console.log("Check error: ", error.response.data);
          toast.error(<FormattedMessage id="toast.login-error" />, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      }
    }
  };

  handleShowHidePassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    });
  };

  handleEnter = (event) => {
    if (event.keyCode === 13) {
      this.handleLogin();
    }
  };
  render() {
    return (
      <div className="register-background">
        <img src={bannerImg} className="card-img" alt="..." />
        <div className="register-container">
          <div className="register-content row">
            <div className="col-12 text-login">Tạo Tài Khoản</div>
            <div className="col-12 form-group register-input">
              <label>Tên đăng nhập:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập tên người dùng"
                value={this.state.username}
                onChange={(event) => this.handleOnChangeUserName(event)}
                onKeyDown={this.handleEnter}
              />
            </div>
            <div className="col-12 form-group register-input">
              <label>Mật khẩu:</label>
              <div className="custom-input-password">
                <input
                  type={this.state.isShowPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Nhập mật khẩu"
                  value={this.state.password}
                  onChange={(event) => this.handleOnChangePassword(event)}
                  onKeyDown={this.handleEnter}
                />
                <span
                  onClick={() => {
                    this.handleShowHidePassword();
                  }}
                >
                  <i
                    className={
                      this.state.isShowPassword
                        ? "far fa-eye"
                        : "far fa-eye-slash"
                    }
                  ></i>
                </span>
              </div>
            </div>
            <div className="col-12 form-group register-input">
              <label>Xác nhận mật khẩu:</label>
              <div className="custom-input-password">
                <input
                  type={this.state.isShowPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Xác nhận mật khẩu"
                  value={this.state.password}
                  onChange={(event) => this.handleOnChangePassword(event)}
                  onKeyDown={this.handleEnter}
                />
                <span
                  onClick={() => {
                    this.handleShowHidePassword();
                  }}
                >
                  <i
                    className={
                      this.state.isShowPassword
                        ? "far fa-eye"
                        : "far fa-eye-slash"
                    }
                  ></i>
                </span>
              </div>
            </div>
            <div className="col-12 form-group register-input">
              <label>Họ tên:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập họ tên"
                value={this.state.username}
                onChange={(event) => this.handleOnChangeUserName(event)}
                onKeyDown={this.handleEnter}
              />
            </div>
            <div className="col-12 form-group register-input">
              <label>Email:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập email"
                value={this.state.username}
                onChange={(event) => this.handleOnChangeUserName(event)}
                onKeyDown={this.handleEnter}
              />
            </div>
            <div className="col-12 form-group register-input">
              <label>Số điện thoại:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập số điện thoại"
                value={this.state.username}
                onChange={(event) => this.handleOnChangeUserName(event)}
                onKeyDown={this.handleEnter}
              />
            </div>
            <div className="btn-register-group">
              <span>
                <button
                  className="btn-register"
                  onClick={() => {
                    this.handleLogin();
                  }}
                >
                  Tạo tài khoản
                </button>
                <button
                  className="btn-cancel"
                  onClick={() => {
                    this.handleLogin();
                  }}
                >
                  Hủy
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    userLoginSuccess: (userInfo) =>
      dispatch(actions.userLoginSuccess(userInfo)),
  };
};

export default injectIntl(
  connect(mapStateToProps, mapDispatchToProps)(Register)
);
