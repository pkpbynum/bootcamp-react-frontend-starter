import React, { Component } from 'react'
import { Card, Title, Members, Button, Container } from './styles'
import PROJECTS from './queries'
import { Query, withApollo } from 'react-apollo'
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
    this.state = { name: '', members: { firstName: '' } }
  }

  render() {
    return (
      <Query
        query={PROJECTS}
        variables={{
          name: this.state.name,
          members: this.state.members.firstName
        }}
      >
        {({ loading, error, data }) => {
          if (loading) return null
          if (error) return `Error!: ${error}`

          console.log(data)
          const cards = PROJECTS.map(PROJECTS => (
            <Card>
              <Title>{PROJECTS.name}</Title>
              <Members>{PROJECTS.members.firstName}</Members>
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
