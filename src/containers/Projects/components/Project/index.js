import React from "react";
import { Card, Title, Members, Button } from "./styles";
import { Flex } from "grid-styled";

const Project = () => (
  <Flex>
    <Card>
      <Title>Project name</Title>
      <Members>Ben, Peter, Zuzanna, Carolyn</Members>
      <Button>View</Button>
    </Card>
  </Flex>
);

export default Project;
