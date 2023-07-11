import React, { Component } from "react";
import "./CardProfile.scss";
import { editAccount, getAccountProfile } from "../../../services/userService";
import { toast } from "react-toastify";

class CardProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountEmail: "",
      accountPhone: "",
      fullName: "",
      accountName: "",
      password: ""
    };
  }

  async componentDidMount() {
    await this.getProfilesFromReact();
  }

  getProfilesFromReact = async () => {
    let response = await getAccountProfile(localStorage.getItem("setToken"));
    this.setState({
      accountEmail: response.data.accountEmail,
      accountPhone: response.data.accountPhone,
      fullName: response.data.fullName,
      password: response.data.password,
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

  handleEditAccount = async () => {
    try {
      let data = new FormData();
      data.append("password", this.state.password);
      data.append("fullName", this.state.fullName);
      data.append("accountPhone", this.state.accountPhone);
      data.append("accountEmail", this.state.accountEmail);
      await editAccount(data, localStorage.getItem("setToken"));
      toast.success("Cập nhật thành công", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      toast.error("Cập nhật không thành công", {
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

  render() {
    return (
      <div>
        <div className="container-user-card">
          <h1 className="title-content">Thông tin khách hàng</h1>
          <div className="row g-0 form-input-content">
            <div className="col-md-3 text-center img-content">
              <img src={"/images/NO_IMG.png"} className="img-fluid" alt="..." />
            </div>
            <div className="col-md-9">
              <div className="form-content">
                <div>
                  <label>Họ tên:</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(event) => {
                      this.handleOnChangeInput(event, "fullName");
                    }}
                    value={this.state.fullName}
                  />
                </div>
                <div className="form-content">
                  <label>Email:</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(event) => {
                      this.handleOnChangeInput(event, "accountEmail");
                    }}
                    value={this.state.accountEmail}
                  />
                </div>
                <div className="form-content">
                  <label>Số điện thoại:</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(event) => {
                      this.handleOnChangeInput(event, "accountPhone");
                    }}
                    value={this.state.accountPhone}

                  />
                </div>
                <div className="form-content">
                  <label>Tên đăng nhập:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.accountName}
                    disabled
                  />
                </div>
                <div className="btn-content">
                  <button
                    type="button"
                    className="btn-edit"
                    title="Chỉnh sửa"
                    onClick={() => {
                      this.handleEditAccount();
                    }}
                  >
                    Chỉnh sửa
                  </button>
                  <button
                    type="button"
                    className="btn-cancel offset-md-3"
                    title="Hủy"
                  // onClick={() => {
                  //   this.handleBanUserDetail();
                  // }}
                  >
                    Hủy bỏ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CardProfile;
