import { Link } from "react-router-dom";
import { WrapperStyle } from "../../global.styled";
import { routesPath } from "../../global.styled";


export const NotFound = () => {
    return (
        <WrapperStyle>
            <h1>404</h1>
            <h2>Страница не найдена</h2>
            <button>
                <Link to={routesPath.MAIN}>Перейти на главную страницу</Link>
            </button>
        </WrapperStyle>

    );
}