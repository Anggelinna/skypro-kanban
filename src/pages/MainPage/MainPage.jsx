import { useEffect, useState, useContext } from "react";
//import { format } from "date-fns";
import { Main } from "../../components/Main/Main.jsx";
import { WrapperStyle } from "../../lib/global.styled.js";
import { Header } from "../../components/Header/Header.jsx";
import { Outlet } from "react-router-dom";
import { getCards } from "../../services/Api.js";
import { statusList } from "../../data.js";
import { Column } from "../../components/Column/Column.jsx";
import { UserContext } from "../../context/UserContext.js";
import { TaskContext } from "../../context/taskContext.js";

export const MainPage = ({ setTheme, theme }) => {
  //const [cards, setCards] = useState(tasks);
  const [isLoading, setIsLoading] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");

  const {cards, setCards} = useState(TaskContext);
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
      //setCards()
      setIsLoading (false)
  }).catch((err) => {
      setErrorMsg(err)
  }).finally(() =>{
      setIsLoading(false)
  })

  }, [user, setCards]);



  return (
    <WrapperStyle>
      <Outlet />

      <Header addCard={addCard} setTheme={setTheme} theme={theme} />
      {errorMsg ? ( <p>${errorMsg}</p>
      ) : isLoading ? ("Загрузка...") : (
        <Main errorMsg={errorMsg} cards={cards}>
        {statusList.map((status) => (
            <Column
                title={status}
                key={status}
                cards={cards.filter((card) => card.status === status)}
            />
        ))}
    </Main>
      )}
    </WrapperStyle>
  );
};
