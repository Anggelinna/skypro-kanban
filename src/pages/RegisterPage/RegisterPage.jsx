import { Link, useNavigate } from "react-router-dom";
import { WrapperStyle } from '../../global.styled.js';
import * as S from '../../pages/RegisterPage/RegisterPage.styled.js';
import { routesPath } from "../../global.styled.js";
import { useState  } from "react";
import { register } from "../../services/Api.js";

export const RegisterPage = () => {

  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState('');

  const [inputValue, setInputValue] = useState({
    name: '',
    login: '',
    password: '',
  })

  const onChangeInput = (e) => {
    const {value, name} = e.target //;
    // console.log(inputValue)
    setInputValue({...inputValue, [name]: value})
  }

  const registerHandler = (e) => {
    e.preventDefault()

    const {name, login, password} = inputValue; //пустые поля
    if (!name||!login||!password) {
      return setErrorMsg("Заполните все поля")
    }

    register(inputValue).then(() => {
      setErrorMsg('')
      navigate(routesPath.LOGIN)
    }).catch ((err)=>{
      setErrorMsg(err.message)

    })
  }

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
                 onChange={onChangeInput} value={inputValue.name}
                  type="text"
                  name="name"
                  id="first-name"
                  placeholder="Имя"
                />
                <S.ModalInput
                 onChange={onChangeInput} value={inputValue.login}
                  type="text"
                  name="login"
                  id="loginReg"
                  placeholder="Эл. почта"
                />
                <S.ModalInput
                 onChange={onChangeInput} value={inputValue.password}
                  type="password"
                  name="password"
                  id="passwordFirst"
                  placeholder="Пароль"
                />
                 <p style={{color:"red"}}>{errorMsg}</p>
                <Link to={routesPath.LOGIN}>
                  <S.ModalBtnRegisterEnter id="RegisterEnter">
                    <S.ModalBtnRegisterEnterA>
                    <a onClick={registerHandler}>
                      Зарегистрироваться</a>
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