import React from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import ListagemDeProdutos from './components/ListagemDeProdutos';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          component={ ListagemDeProdutos }
        />
      </Switch>
    </div>
  );
}

export default App;
