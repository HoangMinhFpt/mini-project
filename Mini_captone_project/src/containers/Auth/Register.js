import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
// import * as actions from "../../store/actions";
import "./Register.scss";
// import { FormattedMessage } from "react-intl";
import { registerAccount } from "../../services/userService";
import { toast } from "react-toastify";
import bannerImg from "../../assets/images/banner.jpg";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountName: "",
      password: "",
      passwordConfirm: "",
      fullName: "",
      accountPhone: "",
      accountEmail: "",
      isShowPassword: false,
      isShowPasswordConfirm: false,
    };
  }

  redirectToSystemPage = () => {
    const { navigate } = this.props;
    const redirectPath = "/login";
    navigate(`${redirectPath}`);
    // toast.success(<FormattedMessage id="toast.login-success" />, {
    //   position: "top-right",
    //   autoClose: 3000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    // });
  };

  handleOnChangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };

  handleRegister = async () => {
    try {
      let data = new FormData();
      data.append("accountName", this.state.accountName);
      data.append("password", this.state.password);
      data.append("accountPhone", this.state.accountPhone);
      data.append("accountEmail", this.state.accountEmail);
      data.append("fullName", this.state.fullName);
      await registerAccount(data);
      // console.log("Check data res:", data);
      this.redirectToSystemPage();
    } catch (error) {
      if (error) {
        toast.error("Không tạo được tài khoản", {
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
  };

  handleShowHidePassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    });
  };

  handleShowHidePasswordConfirm = () => {
    this.setState({
      isShowPasswordConfirm: !this.state.isShowPasswordConfirm,
    });
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
                placeholder="Nhập tên đăng nhập"
                value={this.state.accountName}
                onChange={(event) =>
                  this.handleOnChangeInput(event, "accountName")
                }
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
                  onChange={(event) =>
                    this.handleOnChangeInput(event, "password")
                  }
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
                  type={this.state.isShowPasswordConfirm ? "text" : "password"}
                  className="form-control"
                  placeholder="Xác nhận mật khẩu"
                  value={this.state.passwordConfirm}
                  onChange={(event) =>
                    this.handleOnChangeInput(event, "passwordConfirm")
                  }
                />
                <span
                  onClick={() => {
                    this.handleShowHidePasswordConfirm();
                  }}
                >
                  <i
                    className={
                      this.state.isShowPasswordConfirm
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
                value={this.state.fullName}
                onChange={(event) =>
                  this.handleOnChangeInput(event, "fullName")
                }
              />
            </div>
            <div className="col-12 form-group register-input">
              <label>Email:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập email"
                value={this.state.accountEmail}
                onChange={(event) =>
                  this.handleOnChangeInput(event, "accountEmail")
                }
              />
            </div>
            <div className="col-12 form-group register-input">
              <label>Số điện thoại:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập số điện thoại"
                value={this.state.accountPhone}
                onChange={(event) =>
                  this.handleOnChangeInput(event, "accountPhone")
                }
              />
            </div>
            <div className="btn-register-group">
              <span>
                <button
                  className="btn-register"
                  onClick={() => {
                    this.handleRegister();
                  }}
                >
                  Tạo tài khoản
                </button>
                <button
                  className="btn-cancel"
                  // onClick={() => {
                  //   this.handleLogin();
                  // }}
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
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
