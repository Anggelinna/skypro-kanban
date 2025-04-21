import { useState, useContext } from "react";
import * as S from "./Header.styled.js";
import { Link, useNavigate } from "react-router-dom";
import { routesPath } from "../../lib/routesPath.js";
import { UserContext } from "../../context/UserContext.js";

export const Header = ({ setTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const openModal = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  const addCard = () => {
    navigate(routesPath.NEW_CARD);
  };

  const onTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

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
				<S.HeaderUser onClick={openModal}> {user.name} </S.HeaderUser>
				{isOpen && (
				  <S.HeaderPopUserSet id="user-set-target">
						{/* <a href="">x</a> */}
						<S.HeaderUserSetName>{user.name}</S.HeaderUserSetName>
						<S.HeaderUserSetMail>{user.login}</S.HeaderUserSetMail>
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