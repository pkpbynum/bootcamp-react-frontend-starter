import React from "react";
import { SidebarWrap, SidebarLink, BottomLink, Group } from "./styles";
import SidebarProfile from "./subcomponents/SidebarProfile";
import { withRouter } from "react-router-dom";
import store from "store";

class Sidebar extends React.Component {
  render() {
    return (
      <SidebarWrap>
        <SidebarProfile />
        <Group>
          <SidebarLink onClick={() => this.props.changePage("tasks")}>
            Tasks
          </SidebarLink>
          <SidebarLink onClick={() => this.props.changePage("messages")}>
            Messages
          </SidebarLink>
        </Group>
        <Group>
          <BottomLink to="/projects">Back to Projects</BottomLink>
          <BottomLink onClick={() => store.clearAll()} to="/">
            Logout
          </BottomLink>
        </Group>
      </SidebarWrap>
    );
  }
}

export default Sidebar;
