import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { routesPath } from './global.styled.js'

import MainPage from "./pages/MainPage/MainPage";
import { ExitPage } from './pages/ExitPage/ExitPage.jsx';
import { LoginPage } from './pages/LoginPage/LoginPage.jsx';

export const AppRoutes = ({setTheme, theme}) => {

  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    setIsAuth(true);
    navigate(routesPath.MAIN);
  }

  return (
    <Routes>
       <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route path={routesPath.MAIN} element={<MainPage setTheme={setTheme} theme={theme} />}>
              <Route path={routesPath.CARD_ID} element={<PopBrowsePage />} />
              <Route path={routesPath.EXIT} element={<ExitPage setIsAuth={setIsAuth} />} />
            </Route>
          </Route>
        <Route path={routesPath.LOGIN} element={<LoginPage login={login} />} />
        <Route path={routesPath.REGISTER} element={<RegisterPage />} />
        <Route path={routesPath.NOT_FOUND} element={<NotFound />} />

///////////////////////
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <GlobalStyle/>
      <WrapperStyle>
        <Header addCard={addCard} setTheme={setTheme} theme={theme}/>
        {isLoading ? <p className='loader'>(Загрузка...)</p> : <Main cards={cards}/>}
      </WrapperStyle>
    </ThemeProvider>

    </Routes>
   
  )
}

export default AppRoutes;