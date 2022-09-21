import logo from './logo.svg';
import './App.css';
import Header from './Components/header/header';
import Flashcard from './Components/flashcards/flashcards';

function App() {
    return(
    <div className='main'>
      <Header />
      <div class='flashcard'>
        <Flashcard />
      </div>
    </div>
  );
}

export default App;
