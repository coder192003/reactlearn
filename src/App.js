import './App.css';
import Navbar from './components/navbar';
import TextForm from './components/textform';
import About from './components/About';
import Alert from './components/alert';
import { useState } from 'react';
import { BrowserRouter,Switch,Route, Routes, Link} from 'react-router-dom';
import { TbNumber4Small } from 'react-icons/tb';

export default function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg:message ,
      type:type
    })
    setTimeout(() => {
      setAlert(null); }, 1500);
  }

  

  const toggleMode = () =>
  {
    if(mode ==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor = "#092c63";
      document.body.style.color="white";
      showAlert("Dark mode has enabled","success");
    }
    
    else
    {
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color="black";
      showAlert("Light mode has enabled","success");
    }
    
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title='textUtil' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
    <Routes>
    <Route path="/about" element={<About/>}/>
    <Route path="/home" element={<TextForm text='Enter your text here' mode={mode} showAlert={showAlert} />} />
    </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

