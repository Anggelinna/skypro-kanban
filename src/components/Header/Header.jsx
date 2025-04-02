import { useState } from "react"
import * as S from "./Header.styled.js";
import { Container } from "../../global.styled.js";

export const Header = ({addCard, theme, setTheme}) => {
	const [isOpen, setIsOpen] = useState(false)
	const toggleOpenUser = () => {
		setIsOpen(!isOpen)
	}

	const onTheme = () => {
		setTheme(theme === "light" ? "dark" : "light")
	}
    return (
        <S.Header>
			<Container>
				<S.HeaderBlock>
				<S.HeaderLogo className="_show _light">
						<a href="" target="_self"><img src={theme === "light" ? "images/logo.png" : "images/logo_dark.png"} alt="logo"/></a>
					</S.HeaderLogo>
					<S.HeaderLogo className="_dark">
						<a href="" target="_self"><img src="images/logo_dark.png" alt="logo"/></a>
					</S.HeaderLogo>
					<S.HeaderNav>
						<S.HeaderBtnNew onClick={addCard}><a>Создать новую задачу</a></S.HeaderBtnNew>
						<S.HeaderUser onClick={toggleOpenUser}>Ivan Ivanov</S.HeaderUser>
						{isOpen && (
							<S.HeaderPopUserSet className="pop-user-set" id="user-set-target">
								{/*  <a href="">x</a>  */}
								<S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
								<S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
								<S.PopUserSetTheme>
									<p>Темная тема</p>
									<input checked={theme === "dark"} onClick={onTheme} type="checkbox" className="checkbox" name="checkbox"/>
								</S.PopUserSetTheme>
								<S.PopUserSetButton><a href="#popExit">Выйти</a></S.PopUserSetButton>
							</S.HeaderPopUserSet>
						)}

					</S.HeaderNav>				
				</S.HeaderBlock>
			</Container>			
		</S.Header>
    )
}