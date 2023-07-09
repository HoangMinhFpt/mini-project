import React, { Component } from "react";
import Header from "../containers/Header/Header";
import Footer from "../containers/Footer/Footer";
import BookingOrder from "../components/Booking/BookingOrder";

class Booking extends Component {
  render() {
    return (
      <div>
        <Header />
        <BookingOrder />
        <Footer />
      </div>
    );
  }
}
export default Booking;
