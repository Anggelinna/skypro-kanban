//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
//import { useEffect, useState } from 'react';
import "./App.css";
import { useState } from 'react';
//import { Header } from "./components/Header/Header";
//import { Main } from "./components/Main/Main";
//import { tasks } from './data';
import { GlobalStyle } from './lib/global.styled.js';
import { ThemeProvider } from 'styled-components';
import { dark, light } from './theme';
import { AppRoutes } from './AppRoutes.jsx';


function App() {
  const [theme, setTheme] = useState(true);
  
  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <GlobalStyle/>

        <AppRoutes setTheme={setTheme} theme={theme}/>

      </ThemeProvider>
  )
}

export default App;