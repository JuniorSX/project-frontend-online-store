import React from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          component={ Home }
        />
        <Route
          exact
          path="/shopping-cart"
          component={ ShoppingCart }
        />
        <Route exact path="/ProductDetail/:id" component={ ProductDetail } />
      </Switch>
    </div>
  );
}

export default App;
