import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./TextService.scss";

class TextService extends Component {
  render() {
    return (
      <div>
        <div className="service-container">
          <h1 className="service-title-content">Giá dịch vụ của SmartCity</h1>
          <div className="service-content">
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
          <button className="btn-booking">
            <Link to="/account/booking" className="text-white">
              Đặt lịch
            </Link>
          </button>
        </div>
      </div>
    );
  }
}
export default TextService;
