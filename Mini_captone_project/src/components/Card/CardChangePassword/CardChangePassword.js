import React, { Component } from "react";
import { editAccount, getAccountProfile } from "../../../services/userService";
import { toast } from "react-toastify";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import "./CardChangePassword.scss";
import { Link } from "react-router-dom/cjs/react-router-dom";

class CardChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountEmail: "",
      accountPhone: "",
      fullName: "",
      accountName: "",
      oldPassword: "",
      oldPasswordConfirm: "",
      password: "",
      passwordConfirm: "",
      isShowPasswordNew: false,
      isShowPasswordConfirm: false,
      isShowPasswordOldConfirm: false,
    };
  }

  redirectToSystemPage = () => {
    const { navigate } = this.props;
    const redirectPath = "/homepage";
    navigate(`${redirectPath}`);
    toast.success("Thay đổi mật khẩu thành công", {
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

  async componentDidMount() {
    await this.getProfilesFromReact();
  }

  getProfilesFromReact = async () => {
    let response = await getAccountProfile(localStorage.getItem("setToken"));
    this.setState({
      accountEmail: response.data.accountEmail,
      accountPhone: response.data.accountPhone,
      fullName: response.data.fullName,
      password: "",
      oldPassword: response.data.password,
      accountName: response.data.accountName,
    });
  };

  handleOnChangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };

  handleChangePasswordAccount = async () => {
    try {
      if ((this.state.oldPassword === this.state.oldPasswordConfirm) &&
        (this.state.oldPasswordConfirm !== this.state.password) &&
        (this.state.password === this.state.passwordConfirm)) {
        let data = new FormData();
        data.append("password", this.state.password);
        data.append("fullName", this.state.fullName);
        data.append("accountPhone", this.state.accountPhone);
        data.append("accountEmail", this.state.accountEmail);
        await editAccount(data, localStorage.getItem("setToken"));
        this.redirectToSystemPage();
      } else {
        toast.error("Thay đổi mật khẩu không thành công", {
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
      toast.error("Thay đổi mật khẩu không thành công", {
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

  handleShowHidePasswordNew = () => {
    this.setState({
      isShowPasswordNew: !this.state.isShowPasswordNew,
    });
  };

  handleShowHidePasswordConfirm = () => {
    this.setState({
      isShowPasswordConfirm: !this.state.isShowPasswordConfirm,
    });
  };
  handleShowHidePasswordOldConfirm = () => {
    this.setState({
      isShowPasswordOldConfirm: !this.state.isShowPasswordOldConfirm,
    });
  };

  render() {
    return (
      <div className="container-change-password-card">
        <h1 className="title-content">Thay đổi mật khẩu</h1>
        <div className="row g-0 form-input-content">
          <div className="col-md-9">
            <div className="form-content">
              <label>Mật khẩu cũ:</label>
              <div className="form-confirm-old-password">
                <input
                  type={
                    this.state.isShowPasswordOldConfirm ? "text" : "password"
                  }
                  className={
                    this.state.oldPasswordConfirm !== ""
                      ? this.state.oldPasswordConfirm === this.state.oldPassword
                        ? "form-control is-valid"
                        : "form-control is-invalid"
                      : "form-control"
                  }
                  onChange={(event) => {
                    this.handleOnChangeInput(event, "oldPasswordConfirm");
                  }}
                  value={this.state.oldPasswordConfirm}
                />
                <span
                  onClick={() => {
                    this.handleShowHidePasswordOldConfirm();
                  }}
                >
                  <i
                    className={
                      this.state.isShowPasswordOldConfirm
                        ? "far fa-eye"
                        : "far fa-eye-slash"
                    }
                  ></i>
                </span>
                <div className="confirm-password">
                  {this.state.oldPasswordConfirm === "" ? (
                    ""
                  ) : this.state.oldPasswordConfirm === this.state.oldPassword ? (
                    <div className="success-confirm">
                      <i className="fas fa-check-circle">
                        Xác nhận mật khẩu cũ thành công
                      </i>
                    </div>
                  ) : (
                    <div className="fail-confirm">
                      <i className="fas fa-exclamation-circle">
                        Xác nhận mật khẩu cũ thất bại
                      </i>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="form-content">
              <label>Mật khẩu mới:</label>
              <div className="new-confirm-password">
                <input
                  type={this.state.isShowPasswordNew ? "text" : "password"}
                  className={
                    this.state.password !== ""
                      ? this.state.password === this.state.oldPasswordConfirm
                        ? "form-control is-invalid"
                        : "form-control is-valid"
                      : "form-control"
                  }
                  onChange={(event) => {
                    this.handleOnChangeInput(event, "password");
                  }}
                  value={this.state.password}
                />
                <span
                  onClick={() => {
                    this.handleShowHidePasswordNew();
                  }}
                >
                  <i
                    className={
                      this.state.isShowPasswordNew
                        ? "far fa-eye"
                        : "far fa-eye-slash"
                    }
                  ></i>
                </span>
                <div className="confirm-password">
                  {this.state.password === "" ? (
                    ""
                  ) : this.state.password !== this.state.oldPasswordConfirm ? (
                    <div className="success-confirm">
                      <i className="fas fa-check-circle">
                        Mật khẩu mới hợp lệ
                      </i>
                    </div>
                  ) : (
                    <div className="fail-confirm">
                      <i className="fas fa-exclamation-circle">
                        Trùng mật khẩu cũ
                      </i>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="form-content">
              <label>Xác nhận mật khẩu:</label>
              <div className="form-confirm-password">
                <input
                  type={this.state.isShowPasswordConfirm ? "text" : "password"}
                  className={
                    this.state.passwordConfirm !== ""
                      ? this.state.passwordConfirm === this.state.oldPasswordConfirm
                        ? "form-control is-invalid"
                        : (this.state.passwordConfirm === this.state.password)
                          ? "form-control is-valid" : "form-control is-invalid"
                      : "form-control"
                  }
                  onChange={(event) => {
                    this.handleOnChangeInput(event, "passwordConfirm");
                  }}
                  value={this.state.passwordConfirm}
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
                <div className="confirm-password">
                  {this.state.passwordConfirm === "" ? (
                    ""
                  ) : this.state.passwordConfirm === this.state.oldPasswordConfirm ? (
                    <div className="fail-confirm">
                      <i className="fas fa-exclamation-circle">
                        Trùng mật khẩu cũ
                      </i>
                    </div>
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
              </div>
            </div>
            <span className="btn-content">
              <button
                type="button"
                className="btn-edit"
                title="Chỉnh sửa"
                onClick={() => {
                  this.handleChangePasswordAccount();
                }}
              >
                Chỉnh sửa
              </button>
              <button
                type="button"
                className="btn-cancel offset-md-2"
                title="Hủy"
              >
                <Link to="/homepage" className="text-white">
                  Hủy bỏ
                </Link>
              </button>
            </span>
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
export default connect(mapStateToProps, mapDispatchToProps)(CardChangePassword);
