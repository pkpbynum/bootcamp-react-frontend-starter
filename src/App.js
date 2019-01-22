import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Projects from "./containers/Projects/";
import MainPage from "./containers/MainPage";

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <div className="App">
            <Switch>
              <Route path="/projects" component={Projects} />
              <Route path="/mainpage" component={MainPage} />
            </Switch>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
