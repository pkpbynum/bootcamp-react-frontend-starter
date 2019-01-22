import React from "react";
import { SidebarWrap, SidebarLink, LogoutLink } from "./styles";
import SidebarProfile from "./subcomponents/SidebarProfile";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SidebarWrap>
        <SidebarProfile />
        <div>
          <SidebarLink onClick={() => this.props.changePage("tasks")}>
            Tasks
          </SidebarLink>
          <SidebarLink onClick={() => this.props.changePage("messages")}>
            Messages
          </SidebarLink>
          <SidebarLink onClick={() => this.props.changePage("meetings")}>
            Meetings
          </SidebarLink>
        </div>
        <LogoutLink to="#">Logout</LogoutLink>
      </SidebarWrap>
    );
  }
}

export default Sidebar;
