import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BookingOrder.scss";

class BookingOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordNew: "",
      passwordConfirm: "",
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

  render() {
    return (
      <div className="container-booking">
        <h1 className="title-content">Đặt lịch</h1>
        <div className="row g-0 booking-content">
          <div className="col-md-9">
            <div className="form-content">
              <label>Số lượng nhân viên:</label>
              <div className="new-confirm-password">
                <input
                  type="text"
                  className="form-control"
                  onChange={(event) => {
                    this.handleOnChangeInput(event, "passwordConfirm");
                  }}
                  value={this.state.passwordConfirm}
                />
              </div>
            </div>
            <div className="form-content">
              <label>Dịch vụ:</label>
              <div className="form-confirm-password">
                <input
                  type="text"
                  className="form-control"
                  onChange={(event) => {
                    this.handleOnChangeInput(event, "passwordConfirm");
                  }}
                  value={this.state.passwordConfirm}
                />
              </div>
            </div>
            <div className="form-content">
              <label>Số giờ:</label>
              <div className="new-confirm-password">
                <select
                  className="form-select form-control"
                  aria-label="Default select example"
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
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
