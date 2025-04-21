import { useEffect, useState, useContext } from "react";
//import { format } from "date-fns";
import { Main } from "../../components/Main/Main.jsx";
import { WrapperStyle } from "../../lib/global.styled.js";
import { Header } from "../../components/Header/Header.jsx";
//import {PopNewCard} from '../../components/PopNewCard/PopNewCard.jsx';
import { Outlet } from "react-router-dom";
import { getCards } from "../../services/Api.js";
//import { tasks } from "../../data.js";
import { UserContext } from "../../context/UserContext.js";
import { TaskContext } from "../../context/taskContext.js";

export const MainPage = ({ setTheme, theme }) => {
  const [cards, setCards] = useContext(TaskContext);
  const [isLoading, setIsLoading] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");

  const { user } = useContext(UserContext);

  const addCard = () => {
    const newCard = {
      id: cards.length + 1,
      date: "1.1.2023",
      theme: "Web Design",
      title: "Сходить в кино",
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  };

  useEffect(() => {
    setIsLoading(true);

    getCards(user.token)
      .then(() => {
        setErrorMsg("");
        //setCards(response.tasks)
        //setIsLoading(false)
      })
      .catch((err) => {
        setErrorMsg(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [user, setCards]);

  return (
    <WrapperStyle>
      <Outlet />

      <Header addCard={addCard} setTheme={setTheme} theme={theme} />
      {errorMsg ? (
        <p>${errorMsg}</p>
      ) : isLoading ? (
        "Загрузка..."
      ) : (
        <Main errorMsg={errorMsg} cards={cards} />
      )}
    </WrapperStyle>
  );
};
