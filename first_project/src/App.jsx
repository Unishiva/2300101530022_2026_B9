import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
const showsalert=(name)=>{
        alert(`hello ${name} ****`);
    };
function App() {
  

  return (
    <>
    <h1>example of click event</h1>
    <button onClick={()=>showsalert("ankush")}>click me</button>
    </>
  );
}

export default App
