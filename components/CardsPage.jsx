const React = require('react');
const Layout = require('./Layout');

function CardsPage({ cards = [], user, userCards = [] }) {
  const cardIds = userCards.map((card) => card.card_id);
  return (
    <Layout user={user}>
      <div className="container js-card-container">
        <ul className="themes-list d-flex flex-wrap">
          {cards.map((card) => {
            const btn = cardIds.includes(card.id) ? (
              <button disabled="true" type="button" data-card-id={card.id} className="btn-add btn btn-outline-light btn-lg fw-bolder">
                Выучено
              </button>
            ) : (
              <button type="button" data-card-id={card.id} className="btn-add btn btn-outline-primary btn-lg fw-bolder">
                Добавить на изучение
              </button>
            );
            return (
              <li key={card.id}>
                <div className=" flip-card js-toggleWrapper" tabIndex="-1" style={{ width: '18rem' }}>
                  <div className="flip-card__front">
                    <h2 className="flip-card__content">{card.eng_word}</h2>
                  </div>
                  <button type="button" className="flip-card__button js-toggleButton" data-aria-controls="card-back-1">
                    <span className="screen-reader-text" />
                  </button>
                  <div id="card-back-1" className="flip-card__back">
                    <h2 className="flip-card__content">{card.rus_word}</h2>
                  </div>
                </div>
                {btn}
              </li>
            );
          })}
        </ul>
      </div>

      <script src="/js/cards.js" />
    </Layout>
  );
}

module.exports = CardsPage;
