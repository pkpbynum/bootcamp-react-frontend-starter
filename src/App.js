import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Project from "./containers/Project/";

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <div className="App">
            <Switch>
              <Route path="/" component={Project} />
            </Switch>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
