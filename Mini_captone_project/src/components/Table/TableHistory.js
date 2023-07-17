import moment from "moment/moment";
import React, { Component } from "react";
import {
  cancelBookingService,
  getHistoryBookingById,
} from "../../services/bookingService";
import "./TableHistory.scss";

class TableHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrHistories: [],
    };
  }

  async componentDidMount() {
    await this.getHistoryById();
  }

  getHistoryById = async () => {
    let response = await getHistoryBookingById(
      this.props.data,
      localStorage.getItem("setToken")
    );
    this.setState({
      arrHistories: response.data,
    });
  };

  handleCancel = async (item) => {
    await cancelBookingService(item, localStorage.getItem("setToken"));
    await this.getHistoryById();
  };

  render() {
    const arrHistory = this.state.arrHistories
    console.log("Check data: ", arrHistory);
    return (
      <div className="table-customers-container">
        <div className="customers-table mt-3 mx-1 ">
          <h1 className="history-title-content">Lịch sử đặt lịch</h1>
          <table className="customers">
            <thead>
              <tr>
                <th className="col-2">Dịch vụ</th>
                <th className="col-1">Số nhân viên</th>
                <th className="col-1">Số giờ</th>
                <th className="col-1">Tổng tiền</th>
                <th className="col-2">Ngày đặt</th>
                <th className="col-1">Trạng thái đặt lịch</th>
                <th className="col-1">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {this.state.arrHistories &&
                this.state.arrHistories.map((item, index) => {
                  return (
                    <tr key={index} className="text-center">
                      <td>{item.totalAmount}</td>
                      <td>{item.empQuantity}</td>
                      <td>{item.accountId}</td>
                      <td>{item.totalAmount}</td>
                      <td>
                        {(() => {
                          const date = moment(item.dateOfBooking).format(
                            "DD-MM-YYYY T HH:mm"
                          );
                          return date;
                        })()}
                      </td>
                      <td className="text-center">
                        {(() => {
                          switch (item.statusBooking) {
                            case 1:
                              return <div>Booking</div>;
                            case 2:
                              return <div>Working</div>;
                            case 3:
                              return <div>Finish</div>;
                            case 4:
                              return <div>Cancel</div>;
                            default:
                          }
                        })()}
                      </td>
                      <td>
                        {(() => {
                          switch (item.statusBooking) {
                            case 1:
                              return (
                                <button
                                  className="btn-cancel"
                                  onClick={() => {
                                    this.handleCancel(item.bookingId);
                                  }}
                                >
                                  Cancel
                                </button>
                              );
                            default:
                              return (
                                <button
                                  className="btn-cancel disabled"
                                  disabled
                                >
                                  Cancel
                                </button>
                              );
                          }
                        })()}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {
//     isLoggedIn: state.user.isLoggedIn,
//   };
// };

export default TableHistory;
