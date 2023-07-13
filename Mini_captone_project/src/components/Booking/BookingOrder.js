import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BookingOrder.scss";
import { bookingService } from "../../services/userService";
import { toast } from "react-toastify";

class BookingOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empQuantity: 1,
      serviceId: "",
      quantity: "",
    };
  }

  handleOnChangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };

  handleBooking = async () => {
    try {
      let data = new FormData();
      data.append("empQuantity", this.state.empQuantity);
      data.append("serviceId", this.state.serviceId);
      data.append("quantity", this.state.quantity);
      await bookingService(data, localStorage.getItem("setToken"));
      toast.success("Booking dịch vụ thành công", {
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
      toast.error("Booking dịch vụ không thành công", {
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
  };

  render() {
    const formatter = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      minimumFractionDigits: 3,
      currency: "VND",
    });
    return (
      <div className="container-booking">
        <h1 className="title-content">Đặt lịch</h1>
        <div className="row g-0 booking-content">
          <div className="col-md-9">
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
                  <option selected value="0">
                    Chọn dịch vụ
                  </option>
                  <option value="1">Quét dọn "Giặt quần áo"</option>
                  <option value="2">Quét dọn "Lau dọn nhà cửa"</option>
                  <option value="3">Sửa cửa</option>
                  <option value="4">Vệ sinh máy lạnh "Máy giặt"</option>
                  <option value="5">Vệ sinh máy lạnh "Máy lạnh"</option>
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
                  <option selected value="0">
                    Chọn khoảng thời gian
                  </option>
                  <option value="1">1 giờ</option>
                  <option value="2">2 giờ</option>
                  <option value="3">3 giờ</option>
                  <option value="4">4 giờ</option>
                  <option value="5">5 giờ</option>
                </select>
              </div>
            </div>
            <div className="text-amount">
              Thành tiền:
              {(() => {
                switch (this.state.serviceId) {
                  case "1":
                  case "2":
                    return (
                      <span>
                        {formatter.format(this.state.quantity * 50 + 50)}
                      </span>
                    );
                  case "3":
                    return (
                      <span>
                        {formatter.format(this.state.quantity * 50 + 30)}
                      </span>
                    );
                  case "4":
                  case "5":
                    return (
                      <span>
                        {formatter.format(this.state.quantity * 100 + 50)}
                      </span>
                    );
                  default:
                    break;
                }
              })()}
            </div>
            <div className="btn-content">
              <button
                type="button"
                className="btn-edit"
                title="Chỉnh sửa"
                onClick={() => {
                  this.handleBooking();
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
