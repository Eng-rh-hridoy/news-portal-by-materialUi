import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import News from './Components/News/News';

function App() {
  const [Newses, setNewses] = useState([]);
  useEffect(()=>{
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=fedff11f83664f59a244de7141a54022')
    .then(response => response.json())
    .then(data => setNewses(data.articles))
  }, [])
  return (
    <div>
      <Navbar></Navbar>
      {
        Newses.map(news => <News news = {news}></News>)
      }
    </div>
  );
}

export default App;
