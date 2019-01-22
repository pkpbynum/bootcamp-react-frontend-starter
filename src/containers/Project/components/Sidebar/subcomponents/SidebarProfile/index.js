import React from "react";
import { Container, UserPicture } from "./styles";

class SidebarProfile extends React.Component {
  render() {
    return (
      <Container>
        <UserPicture />
        <p>John Harvard</p>
      </Container>
    );
  }
}

export default SidebarProfile;
