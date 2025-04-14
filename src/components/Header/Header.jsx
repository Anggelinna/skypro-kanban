import { useState } from "react"
import * as S from "./Header.styled.js";
import { routesPath } from "../../global.styled.js";

export const Header = ({ addCard, setTheme, theme, isAuth }) => {
	const [isOpen, setIsOpen] = useState(false)
	const toggleOpenUser = () => {
		setIsOpen(!isOpen)
	}

		setTheme(theme === "light" ? "dark" : "light")
	
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
						  <S.HeaderBtnMainNew id="btnMainNew">
							  <S.HeaderBtnMainNewLink href="#popNewCard" onClick={addCard}> Создать новую задачу </S.HeaderBtnMainNewLink>
						  </S.HeaderBtnMainNew>
						  <S.HeaderUser onClick={toggleOpenUser}> {isAuth.name} </S.HeaderUser>
						  {isOpen && (
							<S.HeaderPopUserSet id="user-set-target">
								  {/* <a href="">x</a> */}
								  <S.HeaderUserSetName>{isAuth.name}</S.HeaderUserSetName>
								  <S.HeaderUserSetMail>{isAuth.login}</S.HeaderUserSetMail>
								  <S.HeaderUserSetTheme>
									 <p>Темная тема</p>
									  <input onChange={()=>setTheme(!theme)} type="checkbox" className="checkbox" name="checkbox" />
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