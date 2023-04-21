import PropTypes from 'prop-types';
import React, { Component } from 'react';
import validator from 'validator';
import './ProductCard.css';

export default class ProductCard extends Component {
  state = {
    email: '',
    text: '',
    rating: 0,
    validEmail: false,
    errorMessage: false,
    savedReview: [],
  };

  componentDidMount() {
    const time = 300;
    setTimeout(() => {
      this.getReview();
    }, time);
  }

  onValueChange(event) {
    const rating = Number(event.target.value);
    this.setState({
      rating,
    });
  }

  getReview = () => {
    const { id } = this.props;
    const savedReview = JSON.parse(localStorage.getItem(id));
    this.setState({
      savedReview,
    });
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.validateEmail);
  };

  validateEmail = () => {
    const { email } = this.state;
    if (validator.isEmail(email)) {
      this.setState({
        validEmail: true,
      });
    } else {
      this.setState({
        validEmail: false,
      });
    }
  };

  formSubmit = (event) => {
    event.preventDefault();
    const { email, text, rating, validEmail } = this.state;
    const { product } = this.props;
    if (validEmail && rating > 0) {
      const idProduct = product.id;
      const review = {
        email,
        text,
        rating,
      };
      const previousReview = localStorage.getItem(idProduct);
      if (previousReview) {
        const parsedpreviousReview = JSON.parse(previousReview);
        const arrayReview = [...parsedpreviousReview, review];
        const stringifiedReview = JSON.stringify(arrayReview);
        localStorage.setItem(idProduct, stringifiedReview);
        this.setState({
          savedReview: arrayReview,
        });
      } else {
        const arrayReview = [];
        arrayReview.push(review);
        localStorage.setItem(idProduct, JSON.stringify(arrayReview));
        this.setState({
          savedReview: arrayReview,
        });
      }
      this.setState({
        errorMessage: false,
        email: '',
        text: '',
        rating: 0,
        validEmail: false,
      });
    } else {
      this.setState({
        errorMessage: true,
      });
    }
  };

  render() {
    const { email, text, errorMessage, savedReview } = this.state;
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
          <form onSubmit={ this.formSubmit }>
            <div className="form-group email-rating">
              <input
                type="text"
                name="email"
                id="email"
                value={ email }
                data-testid="product-detail-email"
                onChange={ (e) => this.onInputChange(e) }
              />
              <input
                type="radio"
                name="st"
                value="1"
                data-testid="1-rating"
                onChange={ (e) => this.onValueChange(e) }
              />
              1
              <input
                type="radio"
                name="st"
                value="2"
                data-testid="2-rating"
                onChange={ (e) => this.onValueChange(e) }
              />
              2
              <input
                type="radio"
                name="st"
                value="3"
                data-testid="3-rating"
                onChange={ (e) => this.onValueChange(e) }
              />
              3
              <input
                type="radio"
                name="st"
                value="4"
                data-testid="4-rating"
                onChange={ (e) => this.onValueChange(e) }
              />
              4
              <input
                type="radio"
                name="st"
                value="5"
                data-testid="5-rating"
                onChange={ (e) => this.onValueChange(e) }
              />
              5
            </div>
            <div className="form-group">
              <textarea
                name="text"
                id="text"
                data-testid="product-detail-evaluation"
                data-role="textarea"
                placeholder="Mensagem (opcional)"
                data-clear-button-icon="<span class='mif-cancel'></span>"
                value={ text }
                onChange={ (e) => this.onInputChange(e) }
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
            {errorMessage ? (
              <span data-testid="error-msg">Campos inválidos</span>
            ) : (<span>tudo ok</span>)}
          </form>
        </section>
        <section className="comments-product">
          { savedReview ? (
            savedReview.map((review, index) => (
              <div className="comment" key={ index }>
                <p data-testid="review-card-email">{review.email}</p>
                <input
                  data-testid="review-card-rating"
                  data-role="rating"
                  data-value={ review.rating }
                  data-static="true"
                />
                <hr />
                <p data-testid="review-card-evaluation">
                  { review.text }
                </p>
              </div>
            ))
          ) : (<p>Nenhuma avaliação</p>)}
        </section>
      </>
    );
  }
}
ProductCard.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
  id: PropTypes.string.isRequired,
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    warranty: PropTypes.string.isRequired,
  }).isRequired,
};
