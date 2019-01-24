import React, { Component } from 'react'
import uuidv4 from 'uuid/v4'
import { Card, Title, Members, Button, Container } from './styles'
import PROJECTS from './queries'
import { Query, withApollo } from 'react-apollo'
import store from 'store'
// const projects = [
//   {
//     id: 1,
//     name: 'poop',
//     createdAt: '5 am',
//     task: 'whack',
//     members: ['Ben', 'Peter', 'Zuzanna', 'Carolyn']
//   }
// ]

class Project extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: store.get('user').id
    }
  }

  render() {
    return (
      <Query
        query={PROJECTS}
        variables={{
          userId: this.state.id
        }}
      >
        {({ loading, error, data }) => {
          if (loading) return null
          if (error) return `Error!: ${error}`

          console.log(data)
          const cards = data.projects.map(project => (
            <Card key={uuidv4()}>
              <Title>{project.name}</Title>
              <Members>{project.members.firstName}</Members>
              <Button>View</Button>
            </Card>
          ))

          return <Container>{cards}</Container>
        }}
      </Query>
    )
  }
}
export default withApollo(Project)
