import React, { Component } from "react";
import Header from "../containers/Header/Header";
import Footer from "../containers/Footer/Footer";
import TableHistory from "../components/Table/TableHistory";
import { getAccountProfile } from "../services/userService";

class HistoryBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountId: "",
    };
  }

  async componentDidMount() {
    await this.getIdAccount();
  }


  getIdAccount = async () => {
    let res = await getAccountProfile(localStorage.getItem("setToken"));
    this.setState({
      accountId: res.data.accountId,
    });
  }
  render() {
    return (
      <div>
        <Header />
        <TableHistory data={this.state.accountId} />
        <Footer />
      </div>
    );
  }
}
export default HistoryBooking;
