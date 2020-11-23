import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { About } from './Pages/About/About'
import './app.css'
import { Home } from './Pages/Home/Home';
import { Shop } from './Pages/Shop/Shop'
function App() {
  return (
    <div>
    <BrowserRouter>
    <Switch>
      <Route
      path={`/`}
      component={Home}
      exact={true}
      label='Home'
      >
      </Route>
      <Route
      path={`/about`}
      component={About}
      exact={true}
      label='About'
      >

      </Route>
      <Route
      path={`/shop`}
      component={Shop}
      exact={true}
      label='Shop'
      >

      </Route>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
