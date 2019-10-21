import React from 'react';
import NavBar from './components/navbar';
import QuoteCards from './components/QuoteCards';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: ""
    };
  }

  getQuote = () => {
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
    .then(response => response.data)
    .then(quote => {
      console.log(quote);
      this.setState({
        quote: quote[0]
      });
    });
  }

  render(){
    return (
      <div className="App">
        <NavBar />
        <QuoteCards character={this.state.quote.character} image={this.state.quote.image} quote={this.state.quote.quote}/>
        <button type="button" onClick={this.getQuote}>Get a quote</button>
      </div>
    );
  }
}

export default App;