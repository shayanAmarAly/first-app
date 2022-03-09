import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react';
import Notification from './component/Notification';

function App() {
  const [mode, setMode] = useState('light');//Now we can control the mode of website from here
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enalbled', 'success');
      document.title = 'TXTUtils = DARK MODE';
      setInterval(() => {
        document.title = 'Install TXTUtils now ';
      }, 2000);
      setInterval(() => {
        document.title = 'Enable TXTUtils DARK MODE';
      }, 1500);
    }
    //these interval are used to blinking the text but this isn't good for user experience   
    else {
      setMode('light');
      document.body.style.backgroundColor = '#fafbfc';
      showAlert('Light mode has been enalbled', 'success');
      document.title = 'TXTUtils = LIGHT MODE';
    }
  }
  return (
    <>
      <Navbar title='TextUTils' mode={mode} toggleMode={toggleMode} />
      <Notification alert={alert} />
      <div className="container my-3" >
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
      </div>

    </>
  );
}

export default App;

  //here we through Textutils as a props to another component the Pros of this thing is we can reuse our code 
/*Passing a value through variable in a component is called props
Props can't changed they are read-only
*/
