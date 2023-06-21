import './App.css';
import Card from './components/card/card';
import Header from './common/header';
import cards from './common/cardsData';

function App() {
  const cardElements = cards.map(card => {
    return <Card title={card.title} fee={card.fee} reviewCount={card.reviewCount} rating={card.rating} country={card.country}/>
  })
  return (
    <div>
      <Header/>
      {cardElements}
    </div>
  );
}

export default App;
