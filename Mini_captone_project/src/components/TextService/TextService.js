import React, { Component } from "react";
import "./TextService.scss";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import serviceImg from "../../assets/images/service.png";

class TextService extends Component {
  redirectToLoginPage = () => {
    const { navigate } = this.props;
    const redirectPath = "/login";
    navigate(`${redirectPath}`);
  };

  redirectToBookingPage = () => {
    const { navigate } = this.props;
    const redirectPath = "/account/booking";
    navigate(`${redirectPath}`);
  };

  handleLogin = () => {
    if (localStorage.getItem("setToken") != null) {
      this.redirectToBookingPage();
    } else {
      this.redirectToLoginPage();
    }
  };

  render() {
    return (
      <div>
        <div className="service-container">
          <h1 className="service-title-content">Giá dịch vụ của SmartCity</h1>
          <div className="service-content">
            <div className="col-sm-1 img-content">
              <img src={serviceImg} className="img-fluid" alt="..." />
            </div>
            <div className="col-md-9 service-content-group">
              <div className="service1-content">
                <h3>Quét dọn</h3>
                <div>
                  Dịch vụ quét dọn của chúng tôi có giá như sau: <br />
                  _Theo giờ: 50.000vnđ/Giờ
                  <br />
                  _Theo người: 50.000vnđ/Người
                  <br />
                  <br />
                </div>
              </div>
              <div className="service2-content">
                <h3>Sửa cửa</h3>
                <div>
                  Dịch vụ sửa cửa của chúng tôi có giá như sau: <br />
                  _Theo giờ: 50.000vnđ/Giờ
                  <br />
                  _Theo người: 30.000vnđ/Người
                  <br />
                  <br />
                </div>
              </div>
              <div className="service3-content">
                <h3>Vệ Sinh Máy Lạnh</h3>
                <div>
                  Dịch vụ sửa chữa máy lạnh của chúng tôi có giá như sau: <br />
                  _Theo giờ: 100.000vnđ/Giờ
                  <br />
                  _Theo người: 50.000vnđ/Người
                  <br />
                </div>
              </div>
            </div>
          </div>
          <button
            className="btn-booking text-white"
            onClick={() => {
              this.handleLogin();
            }}
          >
            Đặt lịch
          </button>
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
export default connect(mapStateToProps, mapDispatchToProps)(TextService);
