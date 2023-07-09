import _ from "lodash";
import React, { Component } from "react";
import "./CardChangePassword.scss";

class CardChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordNew: "",
      passwordConfirm: "",
      isShowPasswordNew: false,
      isShowPasswordConfirm: false,
    };
  }

  componentDidMount() {
    // let user = this.props.currentUser;
    // if (user && !_.isEmpty(user)) {
    this.setState({
      passwordNew: "abc",
      passwordConfirm: "",
    });
    // }
  }

  handleOnChangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
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

  render() {
    return (
      <div className="container-change-password-card">
        <h1 className="title-content">Thay đổi mật khẩu</h1>
        <div className="row g-0 form-input-content">
          <div className="col-md-9">
            <div className="form-content">
              <label>Mật khẩu mới:</label>
              <div className="new-confirm-password">
                <input
                  type={this.state.isShowPasswordNew ? "text" : "password"}
                  className="form-control"
                  onChange={(event) => {
                    this.handleOnChangeInput(event, "passwordNew");
                  }}
                  value={this.state.passwordNew}
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
              </div>
            </div>
            <div className="form-content">
              <label>Xác nhận mật khẩu:</label>
              <div className="form-confirm-password">
                <input
                  type={this.state.isShowPasswordConfirm ? "text" : "password"}
                  className={
                    this.state.passwordConfirm === this.state.passwordNew
                      ? "form-control is-valid"
                      : "form-control is-invalid"
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
              </div>
            </div>
            <div className="confirm-password">
              {this.state.passwordConfirm === this.state.passwordNew ? (
                <div className="success-confirm">
                  <i className="fas fa-check-circle">
                    Xác nhận mật khẩu thành công
                  </i>
                </div>
              ) : (
                <div className="fail-confirm">
                  <i className="fas fa-exclamation-circle">
                    Xác nhận mật khẩu thất bại
                  </i>
                </div>
              )}
            </div>
            <div className="btn-content">
              <button
                type="button"
                className="btn-edit"
                title="Chỉnh sửa"
                onClick={() => {
                  this.handleSaveUserDetail();
                }}
              >
                Chỉnh sửa
              </button>
              <button
                type="button"
                className="btn-cancel offset-md-3"
                title="Hủy"
                onClick={() => {
                  this.handleBanUserDetail();
                }}
              >
                Hủy bỏ
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CardChangePassword;
