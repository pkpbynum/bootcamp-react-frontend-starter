import React, { Component } from "react";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { Switch, Route, Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Projects from "./containers/Projects/";
import MainPage from "./containers/MainPage";
import Login from "./containers/Login";
import Register from "./containers/Register";
import config from "./config";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";
import store from "store";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const authMiddleware = new ApolloLink((operation, forward) => {
  const user = store.get("user");
  console.log(user);
  const token = user ? user.token : null;
  if (token) {
    operation.setContext({
      headers: {
        authorization: token
      }
    });
  }
  return forward(operation);
});

const client = new ApolloClient({
  link: ApolloLink.from([
    authMiddleware,
    new HttpLink({
      uri: config.graphqlUrl,
      credentials: "same-origin"
    })
  ]),
  cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <div className="App">
              <Switch>
                <Route path="/projects" component={Projects} />
                <Route path="/project" component={MainPage} />
                <Route exact path="/" component={Login} />
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
