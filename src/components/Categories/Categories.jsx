import React, { Component } from 'react';
import { getCategories } from '../../services/api';
import './Categories.css';

class Categories extends Component {
  state = {
    categories: [],
  };

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="aside-bar">
        <h3>
          Categorias
        </h3>
        <div className="categories__container">
          {categories.map((category) => (
            <label htmlFor={ category.id } data-testid="category" key={ category.id }>
              {category.name}
              <input type="radio" name="category" id={ category.id } />
            </label>
          ))}
        </div>
      </div>
    );
  }
}

export default Categories;
