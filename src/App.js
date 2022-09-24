
import './App.css';
import {Routes, BrowserRouter as Router, Route} from "react-router-dom"
import Flashcard from './Components/flashcards/flashcards';
import AddWords from './Components/addWords/addWords';
import Header from './Components/header/header';


function App() {
    return(
      <Router>
        <Header/>
        <Routes>
          <Route path='/addWords' element={<AddWords/>}/>
          <Route path='/flashCard' element={<Flashcard/>}/>
        </Routes>  
      </Router>
  );
}

export default App;
