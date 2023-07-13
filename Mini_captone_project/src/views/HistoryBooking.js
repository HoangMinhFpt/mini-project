import React, { Component } from "react";
import Header from "../containers/Header/Header";
import Footer from "../containers/Footer/Footer";
import TableHistory from "../components/Table/TableHistory";

class HistoryBooking extends Component {
  render() {
    return (
      <div>
        <Header />
        <TableHistory />
        <Footer />
      </div>
    );
  }
}
export default HistoryBooking;
