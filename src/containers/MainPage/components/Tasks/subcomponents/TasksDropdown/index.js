import React from "react";
import { Dropdown } from "./styles";
import Filter from "./subcomponents/Filter";

class TasksDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      selected: "0"
    };
  }

  toggleDropdown = () => {
    this.setState({ active: this.state.active ? 0 : 1 });
  };

  setSelected = id => {
    this.setState({ selected: id });
  };

  render() {
    return (
      <Dropdown active={this.state.active}>
        {this.props.members
          .sort(({ id }) => this.props.filtered !== id)
          .map(({ id, firstName, lastName }, ind) => (
            <Filter
              key={ind}
              id={id}
              name={`${firstName} ${lastName}`}
              setFilterId={this.props.setFilterId}
              toggleDropdown={this.toggleDropdown}
            />
          ))}
      </Dropdown>
    );
  }
}

export default TasksDropdown;
