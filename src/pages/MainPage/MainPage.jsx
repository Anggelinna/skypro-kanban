import { useEffect, useState } from "react";
//import { format } from "date-fns";
import { Main } from '../../components/Main/Main.jsx';
import { WrapperStyle } from "../../global.styled.js";
import { Header } from '../../components/Header/Header.jsx';
import {PopNewCard} from '../../components/PopNewCard/PopNewCard.jsx';
import { Outlet } from 'react-router-dom';
import { getCards } from "../../services/Api.js";
import { tasks } from "../../data.js";


export const MainPage = ({setTheme, theme, isAuth}) => {
    const [cards, setCards] = useState(tasks);
    const [isLoading, setIsLoading] = useState(true);

    const [errorMsg, setErrorMsg] = useState('');

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
            setErrorMsg('')
            setCards(response.tasks)
            setIsLoading(false)
        }).catch((err) => {
            setErrorMsg(err)
        }).finally(()=>{
            setIsLoading(false)
        })

    },[isAuth]);

    return (
        <WrapperStyle >
                {/* pop-up start*/}
            <Outlet />
                {/* Перенесены в Outlet */}
                    {/* Взамен <PopExit /> */}
                    {/* <PopBrowse /> */}
            <PopNewCard />
                {/* pop-up end*/}
            <Header 
             isAuth={isAuth} addCard={addCard} setTheme={setTheme} theme={theme}/>
              {errorMsg ? <p>${errorMsg}</p> : ( isLoading ? ("Загрузка...") : (<Main errorMsg={errorMsg}  cards={cards}/>)
            )}
        </WrapperStyle >
    )
}