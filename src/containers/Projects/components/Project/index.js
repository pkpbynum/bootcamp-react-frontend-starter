import React, { Component } from 'react'
import uuidv4 from 'uuid/v4'
import { Card, Title, Members, Button, Container } from './styles'
import PROJECTS from './queries'
import { Query, withApollo } from 'react-apollo'
import store from 'store'

class Project extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: store.get('user').id
    }
  }

  openProject = id => {
    store.set('project', { id })
    this.props.history.push('/project')
  }

  render() {
    return (
      <Query
        query={PROJECTS}
        variables={{
          userId: this.state.id
        }}
      >
        {({ loading, error, data, refetch }) => {
          if (loading) return null
          if (error) return `Error!: ${error}`

          const cards = data.projects.map(project => (
            <Card key={uuidv4()}>
              <Title>{project.name}</Title>
              <Members>{project.members.firstName}</Members>
              <Button onClick={() => this.openProject(project.id)}>View</Button>
            </Card>
          ))

          return <Container>{cards}</Container>
        }}
      </Query>
    )
  }
}
export default withApollo(Project)
