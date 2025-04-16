import { useState } from "react"
import * as S from "./Header.styled.js";
import { Link } from "react-router-dom";
import { routesPath } from "../../global.styled.js";

export const Header = ({ addCard, setTheme, theme, isAuth }) => {
	const [isOpen, setIsOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
   }

   
   const onTheme = () => {
	setTheme(theme === "light" ? "dark" : "light")
}
	
	return (
	  <S.Header>
			  <S.Container>
				  <S.HeaderBlock>
				  <S.HeaderLogo className="_show _light">
						<a href="" target="_self"><img src={theme === "light" ? "images/logo.png" : "images/logo_dark.png"} alt="logo"/></a>
					</S.HeaderLogo>
					<S.HeaderLogo className="_dark">
						<a href="" target="_self"><img src="images/logo_dark.png" alt="logo"/></a>
					</S.HeaderLogo>
					  <S.HeaderNav>
						  <S.HeaderBtnNew id="btnMainNew">
							  <S.HeaderBtnNewLink href="#popNewCard" onClick={addCard}> Создать новую задачу </S.HeaderBtnNewLink>
						  </S.HeaderBtnNew>
						  <S.HeaderUser onClick={openModal}> {isAuth.name} </S.HeaderUser>
						  {isOpen && (
							<S.HeaderPopUserSet id="user-set-target">
								  {/* <a href="">x</a> */}
								  <S.HeaderUserSetName>{isAuth.name}</S.HeaderUserSetName>
								  <S.HeaderUserSetMail>{isAuth.login}</S.HeaderUserSetMail>
								  <S.HeaderUserSetTheme>
									 <p>Темная тема</p>
									  <input onChange={()=>onTheme(!theme)} type="checkbox" className="checkbox" name="checkbox" />
								  </S.HeaderUserSetTheme>
									  <S.HeaderExit>
										  <Link to={routesPath.EXIT}>
											  Выйти
										  </Link>
									  </S.HeaderExit>
							</S.HeaderPopUserSet>
						  )}
					  </S.HeaderNav>
				  </S.HeaderBlock>
				  </S.Container>
		  </S.Header>
	  )
  }