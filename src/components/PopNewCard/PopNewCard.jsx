import { Calendar } from "../Calendar/Calendar";
import { routesPath } from "../../lib/routesPath.js";
import { Link } from "react-router-dom";
import { useState } from "react";
//import { UserContext } from "../../context/UserContext.js";
//import { TaskContext } from "../../context/taskContext.js";
import * as S from "./PopNewCard.styled.js";

export const PopNewCard = () => {

  //const {user} = useContext(UserContext)
  //const { setCards } = useContext(TaskContext)
  //const navigate = useNavigate()
  //const [error, setError] = useState('')



  const [inputValue, setInputValue] = useState({
    title: '',
    theme: '',
    status: '',
    description:'',
  })
  

  const onChangeInput = (e) => {
    const {value, name} = e.target
    setInputValue({...inputValue, [name]: value})
  }

  return (
    <S.PopNewCard id="popNewCard">
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
            <S.PopNewCardClose>
            <Link to={routesPath.MAIN}>&#10006;</Link>
            </S.PopNewCardClose>
            <S.PopNewCardWrap>
              <S.PopNewCardForm action="#">
                <S.FormNewBlock>
                  <S.Subttl htmlFor="formTitle">Название задачи</S.Subttl>
                  <S.FormNewInput
                        onChange={onChangeInput}
                        value={inputValue.title}
                        type="text"
                        name="title"
                        id="formTitle"
                        placeholder="Введите название задачи..."
                        autoFocus=""
                      />
                    </S.FormNewBlock>
                    <S.FormNewBlock>
                      <S.Subttl htmlFor="textArea">
                        Описание задачи
                      </S.Subttl>
                      <S.FormNewArea
                        onChange={onChangeInput}
                        name="description"
                        id="textArea"
                        placeholder="Введите описание задачи..."
                        defaultValue={""}
                      />
                    </S.FormNewBlock>
                  </S.PopNewCardForm>
                  <Calendar />
                </S.PopNewCardWrap>
                <S.PopNewCardCategories>
                  <p>Категория</p>
                  <S.PopNewCardCategoriesTheme>

                    <S.InputRadio
                      type="radio"
                      id="radio1"
                      name="theme"
                      value="Web Design"
                      onChange={onChangeInput}
                    />
                    <S.RadioToolbarLabel1 htmlFor="radio1">Web Design</S.RadioToolbarLabel1>

                    <S.InputRadio
                      type="radio"
                      id="radio2"
                      name="theme"
                      value="Research"
                      onChange={onChangeInput}
                    />
                    <S.RadioToolbarLabel2 htmlFor="radio2">Research</S.RadioToolbarLabel2>

                    <S.InputRadio
                      type="radio"
                      id="radio3"
                      name="theme"
                      value="Copywriting"
                      onChange={onChangeInput}
                    />
                    <S.RadioToolbarLabel3 htmlFor="radio3">Copywriting</S.RadioToolbarLabel3>

                  </S.PopNewCardCategoriesTheme>
                </S.PopNewCardCategories>
             
                <button className="form-new__create _hover01" id="btnCreate">
                  Создать задачу
                </button>
              </S.PopNewCardContent>
            </S.PopNewCardBlock>
          </S.PopNewCardContainer>
        </S.PopNewCard>              
)}
