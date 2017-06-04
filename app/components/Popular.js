var React = require('react');

class Popular extends React.Component {
  constructor(props) { //Initial state
    super(props); //always -> to look up
    this.state = {
      selectedLanguage: 'All'
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) { //Update the state
    this.setState(function () {
      return {
        selectedLanguage: lang
      };
    });
  }

  render() { //UI
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
      <div>
        <ul className='languages'>
          {languages.map(function (lang) {
            return (
              <li
                style={lang === this.state.selectedLanguage ? { color: '#d0021b' } : null}
                onClick={this.updateLanguage.bind(null, lang)}
                key={lang}>
                {lang}
              </li>);
          }, this)}
        </ul>
      </div>
    );
  }
}

module.exports = Popular;