import React, { Component } from "react";
import "./MissionHome.scss";
import intructionImg from "../../../assets/images/intruction.png"

class MissionHome extends Component {
    render() {
        return (
            <div className="mission-container">
                <div className="title-intruction">
                    Khái quát về Smartcity
                </div>
                <div className="mission-content">
                    <div className="mission-text">
                        <div className="first-mission">
                            <div className="text-title">
                                Tính chất công việc
                            </div>
                            <div className="text-mission">
                                Không chỉ thực hiện vệ sinh nhà cửa căn bản (dọn dẹp, quét, lau nhà,...);<br />
                                dịch vụ tổng vệ sinh, người giúp việc sẽ làm sạch đến từng chi tiết nhỏ nhất
                                trong nhà bạn từ vệ sinh trần nhà, lau kính, vệ sinh lỗ thông hơi, gầm tủ, nội thất
                                và các góc khuất trong nhà,... đều sẽ được làm sạch bằng quy trình chuyên biệt phù hợp.
                            </div>

                        </div>
                        <div className="second-mission">
                            <div className="text-title">
                                Đội ngũ
                            </div>
                            <div className="text-mission">
                                So với việc chỉ có một người giúp việc đến thực hiện dọn dẹp như dịch vụ giúp việc theo giờ bình thường,
                                Smartcity  có thể hỗ trợ bạn đặt lịch với 2 - 3 người giúp việc đến thực hiện công việc,
                                có nhóm trưởng phụ trách phân công, kiểm tra, đảm bảo tiến độ và chất lượng công việc.

                            </div>
                        </div>
                        <div className="third-mission">
                            <div className="text-title">
                                Tính chất công việc
                            </div>
                            <div className="text-mission">
                                Đội ngũ giúp việc bắt buộc phải mang theo các thiết bị,
                                dụng cụ chuyên dụng hỗ trợ cho công việc khi đến thực hiện nhiệm vụ.
                                Bạn sẽ hoàn toàn không mất phí cho dụng cụ tổng vệ sinh với dịch vụ giúp việc theo giờ.
                            </div>
                        </div>
                    </div>

                    <div className="img-intruction">
                        <img src={intructionImg} className="card-img" alt="..." />
                    </div>

                </div>
            </div>
        );
    }
}
export default MissionHome;
