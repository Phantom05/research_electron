import React, { useState } from 'react';
import { Helmet } from 'react-helmet'
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';


const Styled = {
  App: styled.div`
    .btn{
      border-radius:5px;
      padding:5px 20px;
      border:0;
      transition:.3s;
      cursor: pointer;
      &:hover{
        opacity:.8;
      }
    }
  `
}
function App() {
  const [value, setValue] = useState(0);

  const handleClick = async (config)=>{
    console.log(config,'config');

    const axiosConf={
      url:`http://localhost:9999/open/exe`,
      method:'post',
      data:config
    }
    const {data} = await axios(axiosConf);
    if(data){
      console.log(data);
    }
  }
  return (
    <>
      <Helmet>
        <title>DOF - Launcher</title>
      </Helmet>
      <Styled.App className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            DOF-Launcher
        </p>
      <input type="file"/>
          <button 
            className="btn"
            onClick={()=>handleClick({
              type:"exe",
              name:"chrome"
            })}
          >
            Chrome.exe
          </button>

        </header>
      </Styled.App>
    </>
  );
}

export default App;
