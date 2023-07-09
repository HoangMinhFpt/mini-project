import React, { Component } from "react";
import Header from "../containers/Header/Header";
import Footer from "../containers/Footer/Footer";
import BannerHome from "../components/TextHome/Banner/BannerHome";
import ContentHome from "../components/TextHome/ContentHome/ContentHome";
import MissionHome from "../components/TextHome/Mission/MissionHome";
import QuestionHome from "../components/TextHome/Question/QuestionHome";

class Homepage extends Component {
  render() {
    return (
      <div>
        <Header />
        <BannerHome />
        <ContentHome />
        <MissionHome />
        <QuestionHome />
        <Footer />
      </div>
    );
  }
}
export default Homepage;
