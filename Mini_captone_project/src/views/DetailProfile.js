import React, { Component } from "react";
import Header from "../containers/Header/Header.js";
import CardProfile from "../components/Card/CardProfile/CardProfile.js";
import Footer from "../containers/Footer/Footer.js";

class DetailProfile extends Component {
  render() {
    return (
      <div>
        <Header />
        <CardProfile />
        <Footer />
      </div>
    );
  }
}
export default DetailProfile;
