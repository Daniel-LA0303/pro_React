import React, {useState} from 'react';
import Cover from "./components/cover/Cover"
import Themes from "./components/theme/Themes"
import Switch from "./components/Switch/Switch"

import { ThemeProvider } from "styled-components"

function App() {

  
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeProvider
        theme={Themes[theme]}
      >
        <Switch 
          theme={theme}
          setTheme={setTheme}
        />
        <Cover 
          theme={theme}
        />
      </ThemeProvider>
    </>
  )
}

export default App
