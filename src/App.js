import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import EntryPage from "./pages/index"
import ErrorPage from "./pages/404"
import FrontPage from "./pages/front"
import SubmitPage from "./pages/newjournal"
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={EntryPage} />
        <Route exact path="/front" component={FrontPage} />
        <Route exact path ="/submit" component={SubmitPage} />
        <Route exact path="/404" component={ErrorPage} />
        <Redirect to ="/404" />
      </Switch>
    </Router>
  );
}

export default App;
