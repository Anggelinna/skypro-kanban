//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import { useEffect, useState } from 'react';
import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { tasks } from './data';
import { GlobalStyle, WrapperStyle } from './global.styled';
import { ThemeProvider } from 'styled-components';
import { dark, light } from './theme';


function App() {
  const [cards, setCards] = useState(tasks) 
  const [isLoading, setIsLoading] = useState(false)
  const [theme, setTheme] = useState("light")

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
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <GlobalStyle/>
      <WrapperStyle>
        <Header addCard={addCard} setTheme={setTheme} theme={theme}/>
        {isLoading ? <p className='loader'>("Загрузка...")</p> : <Main cards={cards}/>}
      </WrapperStyle>
    </ThemeProvider>
  )
}

export default App;