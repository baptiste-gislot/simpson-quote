import React from 'react';
import './quotecards.css';

class QuoteCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favorite: false
        };
    }
    render() {
        return (
        <figure className="QuoteCard">
            <img src={this.props.image} alt={this.props.character}/>
            <figcaption>
            <blockquote>
                {this.props.quote}
            </blockquote>
            <p>
                <cite>{this.props.character}</cite>
                <span onClick={() => {
                    this.setState({favorite: !this.state.favorite});
                }} className={this.state.favorite ? 'is-favorite' : ''}>&#9733;</span>
            </p>
            </figcaption>
        </figure>
        );
    }
}

export default QuoteCards;