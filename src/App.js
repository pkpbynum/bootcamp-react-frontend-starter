import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Home from "./containers/Home/";
import Projects from "./containers/Projects/";

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <div className="App">
            <Switch>
              <Route path="/" component={Home} />
            </Switch>
            <Switch>
              <Route path="/projects" component={Projects} />
            </Switch>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
