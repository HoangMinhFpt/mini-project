import React, { Component } from "react";
import Header from "../containers/Header/Header";
import Footer from "../containers/Footer/Footer";
import TextService from "../components/TextService/TextService";

class Homepage extends Component {
  render() {
    return (
      <div>
        <Header />
        <TextService />
        <Footer />
      </div>
    );
  }
}
export default Homepage;
