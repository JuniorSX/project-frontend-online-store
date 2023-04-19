import React from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import ListagemDeProdutos from './components/ListagemDeProdutos';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          component={ ListagemDeProdutos }
        />
        <Route
          exact
          path="/shopping-cart"
          component={ ShoppingCart }
        />
      </Switch>
    </div>
  );
}

export default App;
