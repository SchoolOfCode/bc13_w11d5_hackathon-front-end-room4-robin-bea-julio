import './App.css';
import Navbar from './Navbar/Navbar';

import React, { createContext, useReducer, useContext } from "react";

const ThemeContext = createContext();

const initialState = {
  darkMode: false,
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHTMODE":
      return { darkMode: false };
    case "DARKMODE":
      return { darkMode: true };
    default:
      return state;
  }
};

export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

function SwitchButton() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const onClick = () => {
    if (darkMode) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  };

  return (
    <button
      className={`btn ${darkMode ? "btn-dark" : "btn-light"}`}
      onClick={onClick}
    >
      {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}

function Interview() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={`bg ${darkMode ? "bg-dark" : "bg-light"}`}>
      <h1 className={`heading ${darkMode ? "heading-dark" : "heading-light"}`}>
        <b>{darkMode ? "Dark Mode" : "Light Mode"}</b>
      </h1>
      <p className={`para ${darkMode ? "para-dark" : "para-light"}`}>
        I can use the buttom bellow to switch between dark and light mode
      </p>
      <SwitchButton />
    </div>
  );
}



function App() {
  return (
    <div className="App bg-yellow-300 min-h-[100vh]">
    
    <ThemeProvider>
      <Navbar/>
      <Interview />
    </ThemeProvider>
      
    </div>
  );
}

export default App;
