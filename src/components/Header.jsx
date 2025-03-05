const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">SkyWords</div>
            <div className="header__actions">
                <button style={{ width: 100}} className="header__button">Сменить тему</button>
                <button className="header__button">Выйти</button>
            </div>
        </header>
    );
};


export default Header;
