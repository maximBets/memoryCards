const React = require('react');
const Layout = require('./Layout');

function PersonalAddPage({ user }) {
  return (
    <Layout user={user}>
      <div className="addFormDiv">
        <form className="add-form-card">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Слово на Английском языке
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEnWord"
              aria-describedby="emailHelp"
              name="engword"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Слово на Русском языке
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputRuWords"
              name="rusword"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Тема
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputTheme"
              name="themetitle"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Добавить
          </button>
        </form>
      </div>
      <script src="/js/addCard.js" />
    </Layout>
  );
}

module.exports = PersonalAddPage;
