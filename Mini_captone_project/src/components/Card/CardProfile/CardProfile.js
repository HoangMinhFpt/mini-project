import React, { Component } from "react";
import "./CardProfile.scss";
import { getAccountProfile } from "../../../services/userService";

class CardProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountEmail: "",
      accountPhone: "",
      fullName: "",
      accountName: "",
    };
  }

  async componentDidMount() {
    await this.getProfilesFromReact();
  }

  getProfilesFromReact = async () => {
    let response = await getAccountProfile(localStorage.getItem("setToken"));
    this.setState({
      id: response.data.id,
      accountEmail: response.data.accountEmail,
      accountPhone: response.data.accountPhone,
      fullName: response.data.fullName,
      accountName: response.data.accountName,
    });
  };

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
                    // onChange={(event) => {
                    //   this.handleOnChangeInput(event, "fullname");
                    // }}
                    value={this.state.fullName}
                    disabled
                  />
                </div>
                <div className="form-content">
                  <label>Email:</label>
                  <input
                    type="text"
                    className="form-control"
                    // onChange={(event) => {
                    //     this.handleOnChangeInput(event, "address");
                    // }}
                    value={this.state.accountEmail}
                    disabled
                  />
                </div>
                <div className="form-content">
                  <label>Tên đăng nhập:</label>
                  <input
                    type="text"
                    className="form-control"
                    // onChange={(event) => {
                    //     this.handleOnChangeInput(event, "address");
                    // }}
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
        </div>
      </div>
    );
  }
}
export default CardProfile;
