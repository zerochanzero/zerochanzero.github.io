import "./index.css";
import "./theme-dark.css";
import { Container } from "reactstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Header from "./components/header";
import FAQ from "./components/faq";
import About from "./components/about";
import Team from "./components/team";

const App = () => {
  return (
    <BrowserRouter>
      <Container fluid>
        <Header />
      </Container>
      <FAQ />
      <About />
      <Team />
      <Switch>
        <Route path="faq" component={FAQ} />
        <Route path="about" component={About} />
        <Route path="team" component={Team} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
