import React, { Component } from "react";
import "./CardChangePassword.scss"

class CardChangePassword extends Component {
    render() {
        return (
            <div>
                <div className="container-change-password-card">
                    <h1 className="title-content">
                        Thay đổi mật khẩu
                    </h1>
                    <div className="row g-0 form-input-content">
                        <div className="col-md-9">
                            <div className="form-content">
                                <div className="form-content">
                                    <label>
                                        Mật khẩu hiện tại:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        // onChange={(event) => {
                                        //     this.handleOnChangeInput(event, "address");
                                        // }}
                                        value="abc"
                                        disabled
                                    />
                                </div>
                                <div className="form-content">
                                    <label>
                                        Mật khẩu mới:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        // onChange={(event) => {
                                        //     this.handleOnChangeInput(event, "address");
                                        // }}
                                        value="abc"
                                        disabled
                                    />
                                </div>
                                <div className="form-content">
                                    <label>
                                        Xác nhận mật khẩu:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        // onChange={(event) => {
                                        //     this.handleOnChangeInput(event, "address");
                                        // }}
                                        value="abc"
                                        disabled
                                    />
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
                                        Chỉnh sửa
                                    </button>
                                    <button
                                        type="button"
                                        className="btn-cancel offset-md-3"
                                        title="Hủy"
                                        onClick={() => {
                                            this.handleBanUserDetail();
                                        }}
                                    >
                                        Hủy bỏ
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default CardChangePassword;
