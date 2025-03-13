const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">SkyWords</div>
            <div className="header__actions">
                <button style={{ width: 100}} className="header__button">Сменить тему</button>
                <button className="header__button">Выйти</button>
            </div>


			<div className="header__block">
					<div className="header__logo _show _light">
						<a href="" target="_self"><img src="images/logo.png" alt="logo"></img></a>
					</div>
					<div className="header__logo _dark">
						<a href="" target="_self"><img src="images/logo_dark.png" alt="logo"></img></a>
					</div>
					<nav className="header__nav">
						<button class="header__btn-main-new _hover01" id="btnMainNew"><a href="#popNewCard">Создать новую задачу</a></button>
						<a href="#user-set-target" class="header__user _hover02">Ivan Ivanov</a>
						<div className="header__pop-user-set pop-user-set" id="user-set-target">
							<a href="">x</a>
							<p className="pop-user-set__name">Ivan Ivanov</p>
							<p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
							<div className="pop-user-set__theme">
								<p>Темная тема</p>
								<input type="checkbox" class="checkbox" name="checkbox"></input>
							</div>
                            <button type="button" className="_hover03"><a href="#popExit">Выйти</a></button>
						</div>
					</nav>					
				</div>
            			
        </header>

    );
};


export default Header;
