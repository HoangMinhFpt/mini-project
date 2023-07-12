import React, { Component } from "react";
import Header from "../containers/Header/Header.js";
import Footer from "../containers/Footer/Footer.js";
import TextInformation from "../components/TextInformation/TextInformation.js";

class Information extends Component {
  render() {
    return (
      <div>
        <Header />
        <TextInformation />
        <Footer />
      </div>
    );
  }
}
export default Information;
