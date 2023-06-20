import logo from './logo.svg';
import './App.css';
import Card from './components/card/card';
import Header from './common/header';

function App() {
  return (
    <div>
      <Header/>
      <Card 
        title="Guitar lessons with Arun"
        fee="25000"
        reviewCount="106"
        rating="5"
        country="India"
      />
      <Card 
        title="Learn Javascript"
        fee="15000"
        reviewCount="93"
        rating="4.5"
        country="USA"
      />
      <Card 
        title="Piano Lessons for beginners"
        fee="10000"
        reviewCount="71"
        rating="4.7"
        country="Brazil"
      />
      <Card 
        title="Marketing Strategy"
        fee="15000"
        reviewCount="63"
        rating="4.9"
        country="UK"
      />
    </div>
  );
}

export default App;
