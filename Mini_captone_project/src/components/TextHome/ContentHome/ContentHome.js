import React, { Component } from "react";
import firstContent from "../../../assets/images/content1.png";
import secondContent from "../../../assets/images/content2.png";
import thirdContent from "../../../assets/images/content3.png";
import "./ContentHome.scss"

class ContentHome extends Component {
    render() {
        return (
            <div className="content-home-container">
                <div className="content-home">
                    <div className="first-content">
                        <img src={firstContent} className="card-img" alt="..." />
                        <div className="text-content">
                            <div className="text-title">Dọn dẹp vệ sinh</div>
                            <div className="icon-text">
                                <i className="fas fa-check"> Nhanh chóng</i>
                                <i className="fas fa-check"> Hệ thống dụng cụ hiện đại</i>
                                <i className="fas fa-check"> Nhân viên tay nghề cao</i>
                            </div>
                        </div>
                    </div>
                    <div className="second-content">
                        <img src={secondContent} className="card-img" alt="..." />
                        <div className="text-content">
                            <div className="text-title">Vệ sinh máy lạnh</div>
                            <div className="icon-text">
                                <i className="fas fa-check"> Hỗ trợ tất cả các dòng máy</i>
                                <i className="fas fa-check"> Vệ sinh cả trong và ngoài</i>
                                <i className="fas fa-check"> Đảm bảo gọn gàng</i>
                            </div>
                        </div>
                    </div>
                    <div className="third-content">
                        <img src={thirdContent} className="card-img" alt="..." />
                        <div className="text-content">
                            <div className="text-title">Sửa chữa</div>
                            <div className="icon-text">
                                <i className="fas fa-check"> An toàn, hiệu quả</i>
                                <i className="fas fa-check"> Đảm bảo tiếng ồn</i>
                                <i className="fas fa-check"> Kinh nghiệm cao</i>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default ContentHome;
