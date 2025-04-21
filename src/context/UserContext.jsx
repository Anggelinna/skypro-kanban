import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { routesPath } from '../lib/routesPath';

//export const UserContext = createContext(null);

function getUserLocalStorage() {
    try {
      return JSON.parse(localStorage.getItem("user"))
    }

    catch (error) {
        console.error("Ошибка загрузки слов", error);

    }

}


export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(getUserLocalStorage);
    const navigate = useNavigate();
    // console.log(user) вывод значения user

    // ... логика управления пользователем
    const loginContext = (response) => {
        setUser(response.user)
        localStorage.setItem('user', JSON.stringify(response.user))
        navigate(routesPath.MAIN)
    }

    const logOutContext = () => {
        setUser(null)
        localStorage.removeItem('user')
        navigate(routesPath.LOGIN)
    }


    return <UserContext.Provider value={{ loginContext, user, logOutContext }}>
        {children}
    </UserContext.Provider>;
};