import './App.css';
import Card from './components/card/card';
import Header from './common/header';
import cards from './common/cardsData';
import HeaderMeme from './common/headerMemeGenerator';
import Meme from './components/meme/meme';

export default function App() {
  return (
    <div>
      <HeaderMeme />
      <Meme />
    </div>
  );
}

//  ***********  CARDS APP ************************ 
//function App() {
 
//   const cardElements = cards.map(card => {
//     //return <Card title={card.title} fee={card.fee} reviewCount={card.reviewCount} rating={card.rating} country={card.country}/>
//     return <Card card={card}/>

//   })
//   return (
//     <div>
//       <Header/>
//       {cardElements}
//     </div>
//   );
// }

//  ***********  CARDS APP ************************ 



