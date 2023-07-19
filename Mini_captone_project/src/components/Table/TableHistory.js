import moment from "moment/moment";
import React, { Component } from "react";
import {
  cancelBookingService,
  getHistoryBookingById,
} from "../../services/bookingService";
import "./TableHistory.scss";
import { getAccountProfile } from "../../services/userService";
import { toast } from "react-toastify";

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

  getProfilesFromReact = async () => {
    let response = await getAccountProfile(localStorage.getItem("setToken"));
    this.setState({
      accountId: response.data.accountId,
    });
  };

  getHistoryById = async () => {
    await this.getProfilesFromReact()
    let response = await getHistoryBookingById(
      this.state.accountId,
      localStorage.getItem("setToken")
    );
    this.setState({
      arrHistories: response.data,
    });
  };

  handleCancel = async (bookingId) => {
    try {
      await cancelBookingService(bookingId, localStorage.getItem("setToken"));
      await this.getHistoryById();
      toast.success("Hủy dịch vụ thành công", {
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
      toast.error("Hủy dịch vụ không thành công", {
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
    const arrHistory = this.state.arrHistories
    console.log("Check data: ", this.props.data, arrHistory);
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
                      <td>{(() => {
                        switch (item.tblBookingDetail.serviceId) {
                          case 1:
                            return (
                              <span>
                                Quét dọn "Giặt quần áo"
                              </span>
                            );
                          case 2:
                            return (
                              <span>
                                Quét dọn "Lau dọn nhà cửa"
                              </span>
                            );
                          case 3:
                            return (
                              <span>
                                Sửa cửa
                              </span>
                            );
                          case 4:
                            return (
                              <span>
                                Vệ sinh máy lạnh "Máy giặt"
                              </span>
                            );
                          case 5:
                            return (
                              <span>
                                Vệ sinh máy lạnh "Máy lạnh"
                              </span>
                            );
                          default:
                            break;
                        }
                      })()}</td>
                      <td>{item.empQuantity}</td>
                      <td>{item.tblBookingDetail.quantity}</td>
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
