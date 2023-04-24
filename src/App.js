import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import React, { Component } from 'react';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetail from './pages/ProductDetail';

export class App extends Component {
  state = {
    numberOfProducts: 0,
  };

  handleNumberOfProducts = () => {
    const previousProducts = localStorage.getItem('cart');
    if (previousProducts) {
      this.setState({
        numberOfProducts: JSON.parse(previousProducts).length,
      });
    }
  };

  render() {
    const { numberOfProducts } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
          >
            <Home
              handleNumberOfProducts={ this.handleNumberOfProducts }
              numberOfProducts={ numberOfProducts }
            />
          </Route>
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
}

export default App;
