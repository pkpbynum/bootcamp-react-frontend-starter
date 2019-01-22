import React from "react";
import { Container, NavItems, Text, Input, Button } from "./styles";

const Navbar = () => (
  <nav>
    <ul>
      <Container>
        <NavItems>
          <li>
            <Text>
              <a href="https://www.google.com/">Create Group</a>
            </Text>
          </li>
        </NavItems>
        <NavItems>
          <li>
            <Text>
              <form>
                <Input
                  type="text"
                  placeholder="Enter a project code"
                  name="code"
                />
                <Button type="submit">Join</Button>
              </form>
            </Text>
          </li>
        </NavItems>
        <NavItems>
          <li>
            <Text>
              <a href="https://www.google.com/">Logout</a>
            </Text>
          </li>
        </NavItems>
      </Container>
    </ul>
  </nav>
);

export default Navbar;
