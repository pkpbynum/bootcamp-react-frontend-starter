import React from "react";
import { Container, UserPicture, Text } from "./styles";
import store from "store";

class SidebarProfile extends React.Component {
  render() {
    return (
      <Container>
        <UserPicture />
        <Text>{`${store.get("user").firstName} ${
          store.get("user").lastName
        }`}</Text>
        <Text>{`Code:\n${store.get("project").code}`}</Text>
      </Container>
    );
  }
}

export default SidebarProfile;
