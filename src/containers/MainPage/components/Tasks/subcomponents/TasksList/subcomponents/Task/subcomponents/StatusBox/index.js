import React from "react";
import { Checkbox } from "./styles";

class StatusBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 0
    };
  }

  componentDidMount() {
    if (this.props.status) {
      this.setState({ status: 1 });
    } else {
      this.setState({ status: 0 });
    }
  }

  toggleStatus = () => {
    if (this.state.status) {
      this.setState({ status: 0 });
    } else {
      this.setState({ status: 1 });
    }
  };

  render() {
    return (
      <Checkbox
        checked={this.state.status}
        onClick={() => this.toggleStatus()}
      />
    );
  }
}

export default StatusBox;
