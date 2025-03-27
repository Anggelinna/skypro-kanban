//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import { useEffect, useState } from 'react';
import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { tasks } from './data';

function App() { 
  const [cards, setCards] = useState(tasks)
  const [isLoading, setIsLoading] = useState(true);

  const addCard = () => {
    const newCard = {
      id: cards.length + 1,
      date: "1.1.2023",
      theme: "Web Design",
      title: "Сходить в кино",
      status: "Без статуса"
    }
    setCards([...cards, newCard])
  }

  useEffect(() => {
    //setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, []);

  return (
    <div className="wrapper">
      <Header addCard={addCard}/>
      {isLoading ? <p className='loader'>Loading...</p> : <Main cards={cards}/>}
    </div>
  );
}

export default App;