import React, { Component } from 'react';
import './QuoteForm.css';

const MAX_LENGTH = 30;

class QuoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ character: event.target.value });
  }

  render() {
    return (
      <form className="QuoteForm" onSubmit={this.handleSubmit}>
        <label htmlFor="character">Character:</label>
        <input
          className={this.state.character.length < MAX_LENGTH ? "length-ok" : "length-maximum-reached"}
          id="name"
          name="character"
          type="text"
          value={this.state.character}
          onChange={this.state.character.length < MAX_LENGTH ? this.handleChange : ''}
        />
        <p className="remaining-characters">Remaining characters: {MAX_LENGTH - this.state.character.length}</p>
        <p>
          You typed: <strong>{this.state.character}</strong>
        </p>
      </form>
    );
  }
}

export default QuoteForm;
