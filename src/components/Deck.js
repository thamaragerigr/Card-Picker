import React from 'react';
import axios from 'axios';
import Card from './Card'
import '../assets/style/App.scss';
const API_URL_BASE = 'https://deckofcardsapi.com/api/deck'

class Deck extends React.Component {
    constructor(props) {
        super(props)
        this.state = { deck: null, drawn: [] }
        this.getCard = this.getCard.bind(this)
    }

    async componentDidMount() {
        let deck = await axios.get(`${API_URL_BASE}/new/shuffle/`)
        this.setState({deck: deck.data})
    }

    async getCard() {
      let deck_id = this.state.deck.deck_id
      try {
        let cardURL = `${API_URL_BASE}/${deck_id}/draw/` 
        let cardRes = await axios.get(`${cardURL}`)
        if (!cardRes.data.success) {
          throw new Error('No more cards on this deck! Reload the page to get a new deck.')
        }
        let card = cardRes.data.cards[0]
        this.setState(prevState =>  ({
            drawn: [
                ...prevState.drawn,
                {
                    id: card.code,
                    image: card.image,
                    name:`${card.value} of ${card.suit}`
                }
            ]
        }))
      } catch (err) {
          alert(err)
      }
    }

    render() {
        const cards = this.state.drawn.map(card => (
            <Card name={card.name} image={card.image} key={card.id} />
        )); 
        
        return (
            <div className='Deck'>
               <button onClick={this.getCard} >Get a Card</button>
               <div className='Deck-cards'>
                 {cards}
               </div>
            </div>
        )
    }
}

export default Deck