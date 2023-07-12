import React, { Component } from "react";
import "./TextInformation.scss";

class TextInformation extends Component {
  render() {
    return (
      <div>
        <div className="information-container">
          <h1 className="information-title-content">Chúng tôi là Smartcity</h1>
          <div className="information-content">
            <div className="information-content-group">
              <div className="information1-content">
                <h2>Chất lượng dịch vụ</h2>
                <div>
                  - Nhân viên vệ sinh được tuyển chọn và đào tạo kỹ lưỡng theo
                  chuẩn Singapore, có nhân thân tốt được xác nhận bởi chính
                  quyền. <br />
                  - Bảo hành toàn bộ ca làm nếu ca làm bị đánh giá 1-2*.
                  <br />
                  - Giám sát kiểm tra định kỳ 1 lần/quý với những hợp đồng định
                  kỳ từ 4 tháng trở lên.
                  <br />
                  <br />
                </div>
              </div>
              <div className="information2-content">
                <h2>Bảo Hiểm và Đền Bù tài sản</h2>
                <div>
                  - Bảo hiểm hỏng và đổ vỡ: Theo Quy tắc Bảo hiểm của Bảo Việt
                  trong trường hợp nhân viên vệ sinh làm hư hỏng, vỡ đồ của
                  Khách hàng. <br />
                  - Đền bù tài sản mất cắp: Trong trường hợp có xác nhận bằng
                  văn bản của cơ quan chức năng về việc nhân viên vệ sinh lấy
                  trộm đồ của Khách hàng.
                  <br />
                  - Vệ sinh GO VINA sẽ đền bù tối đa 2 triệu (với hợp đồng 6
                  tháng) và tối đa 3 triệu đồng (với hợp đồng 12 tháng).
                  <br />
                  <br />
                </div>
              </div>
              <div className="information3-content">
                <h2>Ổn định nhân viên giúp việc</h2>
                <div>
                  - Giữ Nhân viên giúp việc cố định làm tại nhà Quý khách, chỉ
                  thay đổi khi Nhân viên nghỉ do ốm, do lý do cá nhân, chuyển
                  đổi vị trí công việc.
                  <br />
                  - Để đảm bảo việc này, Quý khách vui lòng xác nhận và thanh
                  toán hợp đồng gia hạn trước 15 ngày so với thời điểm hợp đồng
                  hiện tại kết thúc, tránh trường hợp Khách hàng khác chọn mất
                  nhân viên giúp việc. <br />
                  - Đảm bảo có nhân viên giúp việc thay thế: Luôn có nhân viên
                  thay thế khi nhân viên hiện tại nghỉ việc. <br />
                  - Thời gian chờ tối đa: 7 ngày. Số lần đổi nhân viên giúp việc
                  mới trong suốt thời gian hợp đồng: 2 lần (với hợp đồng 6
                  tháng) và 3 lần (với hợp đồng 12 tháng).
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TextInformation;
