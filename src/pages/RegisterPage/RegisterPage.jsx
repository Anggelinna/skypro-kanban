import { Link } from "react-router-dom";
import { WrapperStyle } from '../../global.styled.js';
import * as S from '../../pages/RegisterPage/RegisterPage.styled.js';
import { routesPath } from "../../global.styled.js";

export const RegisterPage = () => {
    return (
        <>
          <WrapperStyle>
          <S.ContainerRegister>
          <S.Modal>
            <S.ModalBlock>
              <S.ModalTtl>
                <h2>Регистрация</h2>
              </S.ModalTtl>
              <S.ModalFormLogin id="formLogUp" action="#">
                <S.ModalInput
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Имя"
                />
                <S.ModalInput
                  type="text"
                  name="login"
                  id="loginReg"
                  placeholder="Эл. почта"
                />
                <S.ModalInput
                  type="password"
                  name="password"
                  id="passwordFirst"
                  placeholder="Пароль"
                />
                <Link to={routesPath.LOGIN}>
                  <S.ModalBtnRegisterEnter id="RegistrEnter">
                    <S.ModalBtnRegisterEnterA>
                      {" "}
                      Зарегистрироваться
                    </S.ModalBtnRegisterEnterA>
                  </S.ModalBtnRegisterEnter>
                </Link>
                <S.ModalFormGroup>
                  <S.ModalFormGroupAP>Уже есть аккаунт?</S.ModalFormGroupAP>
                  <Link to={routesPath.LOGIN}>
                    <S.ModalFormGroupAP>Войдите здесь</S.ModalFormGroupAP>
                  </Link>
                </S.ModalFormGroup>
              </S.ModalFormLogin>
            </S.ModalBlock>
          </S.Modal>
        </S.ContainerRegister>
      </WrapperStyle>
    </>
  );
}
     