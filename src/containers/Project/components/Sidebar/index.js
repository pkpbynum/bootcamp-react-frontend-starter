import React from "react";
import { SidebarWrap, SidebarLink, LogoutLink } from "./styles";
import SidebarProfile from "./subcomponents/SidebarProfile";

const Sidebar = () => (
  <SidebarWrap>
    <SidebarProfile />
    <div>
      <SidebarLink to="#">Tasks</SidebarLink>
      <SidebarLink to="#">Messages</SidebarLink>
      <SidebarLink to="#">Meetings</SidebarLink>
    </div>
    <LogoutLink to="#">Logout</LogoutLink>
  </SidebarWrap>
);

export default Sidebar;
