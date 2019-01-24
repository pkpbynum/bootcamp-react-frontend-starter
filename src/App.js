import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Projects from "./containers/Projects/";
import MainPage from "./containers/MainPage";
import Login from "./containers/Login";
import Register from "./containers/Register";
import config from "./config";

const client = new ApolloClient({
  uri: config.graphqlUrl
});

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <div className="App">
              <Switch>
                <Route path="/projects" component={Projects} />
                <Route path="/mainpage" component={MainPage} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
              </Switch>
            </div>
          </ApolloProvider>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
