//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
//import { useEffect, useState } from 'react';
import "./App.css";
import { useState } from "react";
//import { Header } from "./components/Header/Header";
//import { Main } from "./components/Main/Main";
//import { tasks } from './data';
import { GlobalStyle } from "./lib/global.styled.js";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./theme";
import { AppRoutes } from "./AppRoutes.jsx";
import { UserProvider } from "./context/UseContext.jsx";
import { TaskProvider } from "./context/taskContext.js";

function App() {
  const [theme, setTheme] = useState(true);

  return (
    <TaskProvider>
      <UserProvider>
        <ThemeProvider theme={theme === "light" ? light : dark}>
          <GlobalStyle />

          <AppRoutes setTheme={setTheme} theme={theme} />
        </ThemeProvider>
      </UserProvider>
    </TaskProvider>
  );
}

export default App;
