import React, { Component } from "react";
import "./QuestionHome.scss";
import questionFirstImg from "../../../assets/images/why1.png"
import questionSencondImg from "../../../assets/images/why2.png"
import questionThirdImg from "../../../assets/images/why3.png"

class QuestionHome extends Component {
    render() {
        return (
            <div className="question-container">
                <div className="title-question">
                    Tại sao nên sử dụng dịch vụ của Smart City?
                </div>
                <div className="question-content">
                    <div className="question-text">
                        <div className="first-question">
                            <div className="icon-question">
                                <img src={questionFirstImg} className="card-img" alt="..." />
                            </div>
                            <div className="text-question">
                                Tiết kiệm thời gian
                            </div>

                        </div>
                        <div className="second-question">
                            <div className="icon-question">
                                <img src={questionSencondImg} className="card-img" alt="..." />
                            </div>
                            <div className="text-question">
                                Không tốn chi phí dụng cụ
                            </div>
                        </div>
                        <div className="third-question">
                            <div className="icon-question">
                                <img src={questionThirdImg} className="card-img" alt="..." />
                            </div>
                            <div className="text-question">
                                Cải thiện không gian sống
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default QuestionHome;
