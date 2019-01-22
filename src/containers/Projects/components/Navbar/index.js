import React from "react";
import { Container, NavItems, Text, Input, Button } from "./styles";

const Navbar = () => (
  <nav>
    <ul>
      <Container>
        <NavItems>
          <li>
            <Text as="a" href="https://www.google.com/">
              Create Group
            </Text>
          </li>
        </NavItems>
        <NavItems>
          <li>
            <form>
              <Input
                type="text"
                placeholder="Enter a project code"
                name="code"
              />
              <Button type="submit">Join</Button>
            </form>
          </li>
        </NavItems>
        <NavItems>
          <li>
            <Text as="a" href="https://www.google.com/">
              Logout
            </Text>
          </li>
        </NavItems>
      </Container>
    </ul>
  </nav>
);

export default Navbar;
