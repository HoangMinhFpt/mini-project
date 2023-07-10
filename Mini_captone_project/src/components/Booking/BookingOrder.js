import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BookingOrder.scss";

class BookingOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empQuantity: "",
      serviceId: "",
      quantity: "",
    };
  }

  // componentDidMount() {
  //   // let user = this.props.currentUser;
  //   // if (user && !_.isEmpty(user)) {
  //   this.setState({
  //     passwordNew: "abc",
  //     passwordConfirm: "",
  //   });
  //   // }
  // }

  handleOnChangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };

  render() {
    return (
      <div className="container-booking">
        <h1 className="title-content">Đặt lịch</h1>
        <div className="row g-0 booking-content">
          <div className="col-md-9">
            <div className="form-content">
              <label>Số lượng nhân viên:</label>
              <div className="new-confirm-password">
                <select
                  className="form-select form-control"
                  onChange={(event) => {
                    this.handleOnChangeInput(event, "empQuantity");
                  }}
                  value={this.state.empQuantity}
                >
                  <option selected>Chọn số lượng nhân viên</option>
                  <option value="1">1 </option>
                  <option value="2">2 </option>
                  <option value="3">3 </option>
                  <option value="4">4 </option>
                  <option value="5">5 </option>
                </select>
                <div className="text-content"> Nhân viên</div>
              </div>
            </div>
            <div className="form-content">
              <label>Dịch vụ:</label>
              <div className="new-confirm-password">
                <select
                  className="form-select form-control"
                  onChange={(event) => {
                    this.handleOnChangeInput(event, "serviceId");
                  }}
                  value={this.state.serviceId}
                >
                  <option selected>Chọn dịch vụ</option>
                  <option value="1">Dọn dẹp vệ sinh</option>
                  <option value="2">Vệ sinh máy lạnh</option>
                  <option value="3">Sửa chữa</option>
                </select>
              </div>
            </div>
            <div className="form-content">
              <label>Số giờ:</label>
              <div className="new-confirm-password">
                <select
                  className="form-select form-control"
                  onChange={(event) => {
                    this.handleOnChangeInput(event, "quantity");
                  }}
                  value={this.state.quantity}
                >
                  <option selected>Chọn khoảng thời gian</option>
                  <option value="1">1 giờ</option>
                  <option value="2">2 giờ</option>
                  <option value="3">3 giờ</option>
                  <option value="4">4 giờ</option>
                  <option value="5">5 giờ</option>
                </select>
                <div className="text-content"> Giờ</div>
              </div>
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
                Đặt lịch
              </button>
              <button
                type="button"
                className="btn-cancel offset-md-3"
                title="Hủy"
              >
                <Link to="/service" className="text-white">
                  Trở về
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BookingOrder;
