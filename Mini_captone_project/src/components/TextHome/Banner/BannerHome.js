import React, { Component } from "react";
import bannerImg from "../../../assets/images/banner.jpg"
import logoImg from "../../../assets/images/logo_smart.png"
import "./BannerHome.scss"
class BannerHome extends Component {
    render() {
        return (
            <div className="banner-container">
                <div className="card">
                    <img src={bannerImg} className="card-img" alt="..." />
                    <div className="card-img-overlay">
                        <div className="row logo-img-content">
                            <div className="logo-group">
                                <div className="col-sm-1 logo-content">
                                    <img src={logoImg} className="card-img " alt="..." />
                                </div>
                                <div className="col-md-4 text-content">
                                    <div className="card-body ">
                                        <h1 className="card-title">Smart City</h1>
                                        <p className="card-text text-white">Công ty cung cấp dịch vụ vệ sinh hàng đầu cho Vinhomes.</p>
                                        <button className="btn-learnmore">
                                            Tìm hiểu thêm
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default BannerHome;
