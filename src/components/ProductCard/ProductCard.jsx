import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './ProductCard.css';

export default class ProductCard extends Component {
  render() {
    const { product } = this.props;
    return (
      <>
        <div className="buttons-bar">
          <button>Voltar</button>
          <button data-testid="shopping-cart-button">Carrinho de Compras</button>
        </div>
        <section>
          <div className="img-product">
            <h2 data-testid="product-detail-name">{ product.title }</h2>
            <img
              data-testid="product-detail-image"
              src={ product.thumbnail }
              alt={ product.title }
            />
          </div>
          <div className="detail-product">
            <h2>Especificações Técnicas</h2>
            <ul>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>{product.warranty}</li>
            </ul>
            <div className="price-product">
              <p data-testid="product-detail-price">
                R$
                { product.price }
              </p>
              <div className="add-remove-quantity">
                - 1 +
              </div>
            </div>
            <div className="add-product">
              <button>ADicionar ao Carrinho</button>
            </div>
          </div>
        </section>
        {/* https://metroui.org.ua/rating.html */}
        <section className="rating-product">
          <h2>Avaliação</h2>
          <form>
            <div className="form-group email-rating">
              <input
                type="email"
                placeholder="Email"
                data-testid="product-detail-email"
              />
              <input data-role="rating" data-value="3" />
              <input type="radio" name="st" value="1" data-testid="1-rating" />
              1
              <input type="radio" name="st" value="2" data-testid="2-rating" />
              2
              <input type="radio" name="st" value="3" data-testid="3-rating" />
              3
              <input type="radio" name="st" value="4" data-testid="4-rating" />
              4
              <input type="radio" name="st" value="5" data-testid="5-rating" />
              5

            </div>
            <div className="form-group">
              <textarea
                data-testid="product-detail-evaluation"
                data-role="textarea"
                placeholder="Mensagem (opcional)"
                data-clear-button-icon="<span class='mif-cancel'></span>"
              />
            </div>
            <div className="form-group">
              <button
                className="button success"
                data-testid="submit-review-btn"
              >
                Avaliar
              </button>
            </div>
          </form>
        </section>
        <section className="comments-product">
          <div className="comment">
            <p>junior@trybe.com</p>
            <input
              data-role="rating"
              data-value="3.5"
              data-static="true"
            />
            <hr />
            <p>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
          <div className="comment">
            <p>junior@trybe.com</p>
            <input
              data-role="rating"
              data-value="3.5"
              data-static="true"
            />
            <hr />
            <p>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
          <div className="comment">
            <p>junior@trybe.com</p>
            <input
              data-role="rating"
              data-value="3.5"
              data-static="true"
            />
            <hr />
            <p>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
        </section>
      </>
    );
  }
}

ProductCard.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
  product: PropTypes.shape({
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    warranty: PropTypes.string.isRequired,
  }).isRequired,
};
