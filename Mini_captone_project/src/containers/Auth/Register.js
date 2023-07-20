import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
// import * as actions from "../../store/actions";
import "./Register.scss";
// import { FormattedMessage } from "react-intl";
import { registerAccount } from "../../services/userService";
import { toast } from "react-toastify";
import bannerImg from "../../assets/images/banner.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom";

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
    toast.success("Tạo tài khoản thành công", {
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

  handleOnChangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };

  handleRegister = async () => {
    try {
      if (this.state.password !== "" && this.state.accountName !== "" && this.state.passwordConfirm !== "") {
        let data = new FormData();
        data.append("accountName", this.state.accountName);
        data.append("password", this.state.password);
        data.append("accountPhone", this.state.accountPhone);
        data.append("accountEmail", this.state.accountEmail);
        data.append("fullName", this.state.fullName);
        await registerAccount(data);
        this.redirectToSystemPage();
      } else {
        toast.error("Không để trống `Tên đăng nhập, Mật khẩu, Xác nhận mật khẩu`", {
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
    } catch (error) {
      toast.error("Tạo tài khoản thất bại", {
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
          <form className="register-content row">
            <div className="col-12 text-login">Tạo Tài Khoản</div>
            <div className="col-12 form-group register-input">
              <span>
                <label className="text-danger fs-4">*</label>
                <label>Tên đăng nhập:</label>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập tên đăng nhập"
                value={this.state.accountName}
                onChange={(event) =>
                  this.handleOnChangeInput(event, "accountName")
                }
                required
              />
            </div>
            <div className="col-12 form-group register-input">
              <span>
                <label className="text-danger fs-4">*</label>
                <label>Mật khẩu:</label>
              </span>
              <div className="custom-input-password">
                <input
                  type={this.state.isShowPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Nhập mật khẩu"
                  required
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
              <span>
                <label className="text-danger fs-4">*</label>
                <label>Xác nhận mật khẩu:</label>
              </span>
              <div className="custom-input-password">
                <input
                  type={this.state.isShowPasswordConfirm ? "text" : "password"}
                  className="form-control"
                  placeholder="Xác nhận mật khẩu"
                  value={this.state.passwordConfirm}
                  onChange={(event) =>
                    this.handleOnChangeInput(event, "passwordConfirm")
                  }
                  required
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
            <div className="confirm-password">
              {this.state.passwordConfirm === "" ? (
                ""
              ) : this.state.passwordConfirm === this.state.password ? (
                <div className="success-confirm">
                  <i className="fas fa-check-circle">
                    Xác nhận mật khẩu mới thành công
                  </i>
                </div>
              ) : (
                <div className="fail-confirm">
                  <i className="fas fa-exclamation-circle">
                    Xác nhận mật khẩu mới thất bại
                  </i>
                </div>
              )}
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
          </form>
          <span className="btn-register-group">
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
            >
              <Link to="/login" className="text-white">
                Trở về
              </Link>
            </button>
          </span>
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
