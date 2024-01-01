import './App.css';
import React,{useState} from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';

function App() {
  const[mode, setMode]=useState('light');
  const[alert, setAlert]=useState(null);
  
  const showAlert=(msg, type)=>{
    setAlert({
      msg:msg,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const handleOnchange=()=>{
    if(mode==='light')
    {
      setMode('dark');
      showAlert('Drak mode enabled','success');
      document.body.style.backgroundColor="#212529"
      document.body.style.color="white"
    }

    if(mode==='dark'){
      setMode('light');
      showAlert('Drak mode disabled','success');
    }
  }
  return (
    <>
     <Navbar mode={mode} toggleMode={handleOnchange}/>
     <Alert alert={alert}/>
     <TextForm title={'Type Here:'}/> 
     <About mode={mode}/>
    </>
  );
}

export default App;
