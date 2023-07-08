import React, { Component } from "react";
import Header from "../containers/Header/Header";
import CardChangePassword from "../components/Card/CardChangePassword/CardChangePassword";
import Footer from "../containers/Footer/Footer";

class ChangePassword extends Component {
  render() {
    return (
      <div>
        <Header />
        <CardChangePassword />
        <Footer />
      </div>
    );
  }
}
export default ChangePassword;
