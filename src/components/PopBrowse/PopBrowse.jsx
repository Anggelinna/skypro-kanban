import { Link, useParams } from "react-router-dom";

import { routesPath } from "../../lib/routesPath.js";
import * as S from "./PopBrowse.styled.js"

export const PopBrowse = () => {
  const { id } = useParams();
  return (
    <S.PopBrouwseStyled id="popBrowse">
      <S.PopBrouwseContainer>
        <S.PopBrouwseBlock>
          <S.PopBrouwseContent>
            <S.PopBrouwseTopBlock>
              <S.PopBrouwseTitle>Название задачи: {id}</S.PopBrouwseTitle>
              <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </S.PopBrouwseTopBlock>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                <div className="status__theme _hide">
                  <p>Без статуса</p>
                </div>
                <div className="status__theme _gray">
                  <p className="_gray">Нужно сделать</p>
                </div>
                <div className="status__theme _hide">
                  <p>В работе</p>
                </div>
                <div className="status__theme _hide">
                  <p>Тестирование</p>
                </div>
                <div className="status__theme _hide">
                  <p>Готово</p>
                </div>
              </div>
            </div>
            <S.PopBrouwseWrap>
              <form
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                action="#"
              >
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-browse__area"
                    name="text"
                    id="textArea01"
                    readOnly=""
                    placeholder="Введите описание задачи..."
                    defaultValue={""}
                  />
                </div>
              </form>
            </S.PopBrouwseWrap>
            <S.PopBrouwseBtnBrouwse>
              <div className="btn-group">
                <Link to="#"><S.BtnBor>Редактировать задачу</S.BtnBor></Link>
                <Link to="#"><S.BtnBor>Удалить задачу</S.BtnBor></Link>
              </div>
              <S.BtnBg>
                <Link to={routesPath.MAIN}>Закрыть</Link>
              </S.BtnBg>
            </S.PopBrouwseBtnBrouwse>
            <S.PopBrowseBtnEdit>
              <S.BtnGroup>
                <Link to="#"><S.BtnBg>Сохранить</S.BtnBg></Link>
                <Link to="#"><S.BtnBor>Отменить</S.BtnBor></Link>
                <Link to="#"><S.BtnBor id="btnDelete">Удалить задачу</S.BtnBor></Link>
              </S.BtnGroup>
              <Link to="#"><S.BtnBg>Закрыть</S.BtnBg></Link>
            </S.PopBrowseBtnEdit>
          </S.PopBrouwseContent>
        </S.PopBrouwseBlock>
      </S.PopBrouwseContainer>
    </S.PopBrouwseStyled>
  );
}