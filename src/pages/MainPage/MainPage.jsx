import { useEffect, useState } from "react";
//import { format } from "date-fns";
import { Main } from '../../components/Main/Main.jsx';
import { tasks } from './../../data.js';
import { WrapperStyle } from "../../global.styled.js";
import { Header } from '../../components/Header/Header.jsx';
import {PopNewCard} from '../../components/PopNewCard/PopNewCard.jsx';
import { Outlet } from 'react-router-dom';


export const MainPage = ({setTheme, theme}) => {
  const [cards, setCards] = useState(tasks) 
  const [isLoading, setIsLoading] = useState(false)
  //const [theme, setTheme] = useState("light")

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
        <WrapperStyle>
                {/* pop-up start*/}
            <Outlet />
                {/* Перенесены в Outlet */}
                    {/* Взамен <PopExit /> */}
                    {/* <PopBrowse /> */}
            <PopNewCard />

                {/* pop-up end*/}

            <Header addCard={addCard} setTheme={setTheme} theme={theme}/>
            {isLoading ? ("Загрузка...") : (<Main cards={cards}/>)}
            {/* <MainComponent isLoading={isLoading} cards={cards}/> */}
        </WrapperStyle>
    )
}