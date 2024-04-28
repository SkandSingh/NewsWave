import './App.css';
import React, { useState } from 'react'
import NavBar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 5;
  // const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  const [mode,setMode] = useState('light');
  const [ToggleMode,setToggleMode]= useState('DakrMode');


  const toggleMode = ()=>{
    if (mode==='light'){
      setMode('dark');
      setToggleMode('LightMode')
      document.body.style.backgroundColor='rgb(34 34 34)';
      // document.body.style.color='white';

    }
    else{
  setMode('light');
  setToggleMode('DarkMode');
  document.body.style.backgroundColor='white';
  // document.body.style.color='black';


    }  
  }


  return (
    <div>
      <Router>
        <NavBar ToggleMode={ToggleMode} toggleMode={toggleMode} mode={mode}/>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress}  mode={mode} key="general" pageSize={pageSize} country="in" category="general" />}></Route>
          <Route exact path="/business" element={<News setProgress={setProgress} mode={mode}  key="business" pageSize={pageSize} country="in" category="business" />}></Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} mode={mode}  key="entertainment" pageSize={pageSize} country="in" category="entertainment" />}></Route>
          <Route exact path="/general" element={<News setProgress={setProgress} mode={mode}  key="general" pageSize={pageSize} country="in" category="general" />}></Route>
          <Route exact path="/health" element={<News setProgress={setProgress} mode={mode}  key="health" pageSize={pageSize} country="in" category="health" />}></Route>
          <Route exact path="/science" element={<News setProgress={setProgress} mode={mode}  key="science" pageSize={pageSize} country="in" category="science" />}></Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} mode={mode}  key="sports" pageSize={pageSize} country="in" category="sports" />}></Route>
          <Route exact path="/technology" element={<News setProgress={setProgress} mode={mode}  key="technology" pageSize={pageSize} country="in" category="technology" />}></Route>

        </Routes>
      </Router>
    </div>
  )

}

export default App;
