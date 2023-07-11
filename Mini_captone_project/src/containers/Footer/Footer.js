import React, { Component } from "react";
import { connect } from "react-redux";
import "./Footer.scss";
import logo from "../../assets/images/logo_smart.png";

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo-content">
            <img src={logo} className="card-img" alt="..." />
            <div className="logo-title">SmartCity</div>
          </div>
          <div className="footer-up-content">
            <div className="home-content">
              Công Ty TNHH SmartCity
              <br />
              Vinhomes GrandPark, Phường Long Bình, Quận 9, Tp.Hồ Chí Minh
              <br />
              Số điện thoại: 1900 123 123
              <br />
              Email: support@smartcity.com
              <br />
            </div>
          </div>
          <hr />
          <div className="footer-down-content">
            <div className="copy-right-content">Copyright © 2023 BRIX </div>
            <div className="btn-group">
              <span>
                <button>
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button>
                  <i className="fab fa-twitter"></i>
                </button>
                <button>
                  <i className="fab fa-instagram"></i>
                </button>
                <button>
                  <i className="fab fa-linkedin-in"></i>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
