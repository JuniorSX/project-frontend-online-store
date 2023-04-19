import React, { Component } from 'react';
import Categories from './Categories/Categories';

class ListagemDeProdutos extends Component {
  render() {
    return (
      <div>
        <section>
          <Categories />
        </section>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default ListagemDeProdutos;
