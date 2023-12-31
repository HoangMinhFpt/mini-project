import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import "./Login.scss";
// import { FormattedMessage, injectIntl } from "react-intl";
import { handleLoginApi } from "../../services/userService";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import bannerImg from "../../assets/images/banner.jpg";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isShowPassword: false,
    };
  }

  redirectToSystemPage = () => {
    const { navigate } = this.props;
    const redirectPath = "/homepage";
    navigate(`${redirectPath}`);
    toast.success("Đăng nhập thành công", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
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
    try {
      let data = await handleLoginApi(this.state.username, this.state.password);
      localStorage.setItem("setToken", data);
      this.props.userLoginSuccess(data.admin);
      this.redirectToSystemPage();
    } catch (error) {
      if (error.response) {
        if (error.response.data) {
          this.setState({
            Message: error.response.data.Message,
          });
          toast.error("Sai thông tin đăng nhập", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
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
      <div className="login-background">
        <img src={bannerImg} className="card-img" alt="..." />
        <div className="login-container">
          <div className="login-content row">
            <div className="col-12 text-login">Đăng nhập</div>
            <div className="col-12 form-group login-input">
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
            <div className="col-12 form-group login-input">
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
            <div className="col-12">
              <button
                className="btn-login"
                onClick={() => {
                  this.handleLogin();
                }}
              >
                Đăng nhập
              </button>
              <div className="text-register">
                Không có tài khoản? <Link to="/register">Tạo tài khoản</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    userLoginSuccess: (userInfo) =>
      dispatch(actions.userLoginSuccess(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
