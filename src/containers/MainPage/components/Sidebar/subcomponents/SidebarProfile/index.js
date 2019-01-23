import React from "react";
import { Container, UserPicture, UserName } from "./styles";

class SidebarProfile extends React.Component {
  render() {
    return (
      <Container>
        <UserPicture />
        <UserName>John Harvard</UserName>
      </Container>
    );
  }
}

export default SidebarProfile;
