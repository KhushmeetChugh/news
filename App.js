import './App.css';
import { useState } from 'react'
import { NavBar } from './components/NavBar';
import News from './components/News';
import React from "react";
import { useParams } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
const App=()=> {

  const pageSize=9;
  const apiKey=process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0)
  const {id}=useParams();
   
    return (
            
      <>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />   
      <Routes>
        <Route path="/" element={<News key="general"setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="general"/>}/>
          <Route path="/business" element={<News key="business"setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="business"/>}/>
          <Route path="/entertainment" element={<News key="entertainment" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="entertainment"/>}/>
          <Route path="/general" element={<News key="general" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in"           category="general"/>}/>
          <Route path="/health" element={<News key="health" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in"          category="health"/>}/>
          <Route path="/science" element={<News key="science" setProgress={setProgress} apiKey={apiKey}pageSize={pageSize} country="in"           category="science"/>}/>
          <Route path="/sports" element={<News key="sports" setProgress={setProgress} apiKey={apiKey}pageSize={pageSize} country="in"          category="sports"/>}/>
          <Route path="/technology" element={<News key="technology" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in"          category="technology"/>}/>
          
        </Routes>
        </>
        
      
    )
  
}
export default App;




