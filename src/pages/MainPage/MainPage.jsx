import { useEffect, useState } from "react";
//import { format } from "date-fns";
import { Main } from '../../components/Main/Main.jsx';
//import { tasks } from './../../data.js';
import { WrapperStyle } from "../../global.styled.js";
import { Header } from '../../components/Header/Header.jsx';
import {PopNewCard} from '../../components/PopNewCard/PopNewCard.jsx';
import { Outlet } from 'react-router-dom';
import { getCards } from "../../services/Api.js";


export const MainPage = ({setTheme, theme, isAuth}) => {
  const [cards, setCards] = useState() 
  const [isLoading, setIsLoading] = useState(false)
  //const [theme, setTheme] = useState("light")
  const [error, setError] = useState('');


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
    setIsLoading (true)

    getCards(isAuth.token).then((response)=>{
        setError('')
        setCards(response.tasks)
        setIsLoading(false)
    }).catch((err) => {
        setError(err)
    }).finally(()=>{
        setIsLoading(false)
    })

},[isAuth]);

    return (
        <WrapperStyle>
                {/* pop-up start*/}
            <Outlet />
                {/* Перенесены в Outlet */}
                    {/* Взамен <PopExit /> */}
                    {/* <PopBrowse /> */}
            <PopNewCard />

                {/* pop-up end*/}

            <Header isAuth={isAuth} addCard={addCard} setTheme={setTheme} theme={theme}/>
              {error ? <p>${error}</p> : (isLoading ? ("Загрузка...") : (<Main errorMsg={error}  cards={cards}/>)
            )}
        </WrapperStyle>
    )
}