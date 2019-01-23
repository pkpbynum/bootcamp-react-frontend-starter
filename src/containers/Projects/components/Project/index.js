import React, { Component } from "react";
import { Card, Title, Members, Button, Container } from "./styles";
// import { Flex } from "grid-styled";
const projects = [
  {
    id: 1,
    name: "poop",
    createdAt: "5 am",
    task: "whack",
    members: ["Ben", "Peter", "Zuzanna", "Carolyn"]
  },
  {
    id: 2,
    name: "Project",
    createdAt: "5 am",
    task: "whack",
    members: ["Ben", "Peter", "Zuzanna", "Carolyn"]
  },
  {
    id: 3,
    name: "Project 2",
    createdAt: "5 am",
    task: "whack",
    members: ["Ben", "Peter", "Zuzanna", "Carolyn"]
  },
  {
    id: 4,
    name: "Project Again",
    createdAt: "5 am",
    task: "whack",
    members: ["Ben", "Peter", "Zuzanna", "Carolyn"]
  },
  {
    id: 5,
    name: "More Project",
    createdAt: "5 am",
    task: "whack",
    members: ["Ben", "Peter", "Zuzanna", "Carolyn"]
  },
  {
    id: 1,
    name: "poop",
    createdAt: "5 am",
    task: "whack",
    members: ["Ben", "Peter", "Zuzanna", "Carolyn"]
  },
  {
    id: 1,
    name: "poop",
    createdAt: "5 am",
    task: "whack",
    members: ["Ben", "Peter", "Zuzanna", "Carolyn"]
  },
  {
    id: 1,
    name: "poop",
    createdAt: "5 am",
    task: "whack",
    members: ["Ben", "Peter", "Zuzanna", "Carolyn"]
  },
  {
    id: 1,
    name: "poop",
    createdAt: "5 am",
    task: "whack",
    members: ["Ben", "Peter", "Zuzanna", "Carolyn"]
  },
  {
    id: 1,
    name: "poop",
    createdAt: "5 am",
    task: "whack",
    members: ["Ben", "Peter", "Zuzanna", "Carolyn"]
  },
  {
    id: 1,
    name: "poop",
    createdAt: "5 am",
    task: "whack",
    members: ["Ben", "Peter", "Zuzanna", "Carolyn"]
  },
  {
    id: 1,
    name: "poop",
    createdAt: "5 am",
    task: "whack",
    members: ["Ben", "Peter", "Zuzanna", "Carolyn"]
  },
  {
    id: 1,
    name: "poop",
    createdAt: "5 am",
    task: "whack",
    members: ["Ben", "Peter", "Zuzanna", "Carolyn"]
  },
  {
    id: 1,
    name: "poop",
    createdAt: "5 am",
    task: "whack",
    members: ["Ben", "Peter", "Zuzanna", "Carolyn"]
  },
  {
    id: 1,
    name: "poop",
    createdAt: "5 am",
    task: "whack",
    members: ["Ben", "Peter", "Zuzanna", "Carolyn"]
  },
  {
    id: 1,
    name: "poop",
    createdAt: "5 am",
    task: "whack",
    members: ["Ben", "Peter", "Zuzanna", "Carolyn"]
  },
  {
    id: 1,
    name: "poop",
    createdAt: "5 am",
    task: "whack",
    members: ["Ben", "Peter", "Zuzanna", "Carolyn"]
  },
  {
    id: 1,
    name: "poop",
    createdAt: "5 am",
    task: "whack",
    members: ["Ben", "Peter", "Zuzanna", "Carolyn"]
  },
  {
    id: 1,
    name: "poop",
    createdAt: "5 am",
    task: "whack",
    members: ["Ben", "Peter", "Zuzanna", "Carolyn"]
  },
  {
    id: 1,
    name: "poop",
    createdAt: "5 am",
    task: "whack",
    members: ["Ben", "Peter", "Zuzanna", "Carolyn"]
  },
  {
    id: 1,
    name: "poop",
    createdAt: "5 am",
    task: "whack",
    members: ["Ben", "Peter", "Zuzanna", "Carolyn"]
  }
];

class Project extends Component {
  // constructor() {
  //   super();
  // }
  render() {
    const cards = projects.map(project => (
      <Card>
        <Title>{project.name}</Title>
        <Members>{project.members.join(", ")}</Members>
        <Button>View</Button>
      </Card>
    ));
    return <Container>{cards}</Container>;
  }
}
export default Project;
