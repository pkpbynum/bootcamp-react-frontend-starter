import React from "react";
import { Container } from "./styles";
import Task from "./subcomponents/Task";
import _ from "lodash";
import moment from "moment";

//https://thomaskekeisen.de/en/blog/array-date-sort-lodash-momentjs/

class TasksList extends React.Component {
  render() {
    const tasks = _.sortBy(this.props.tasks, function(o) {
      return new moment(o.deadline);
    }).map((task, ind) => <Task key={ind} task={task} />);
    return <Container>{tasks}</Container>;
  }
}

export default TasksList;
