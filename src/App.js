import './App.css';
import Home from './pages/Home'
import Description from './pages/Description'

import {

  Routes,
  Route
} from 'react-router-dom';



function App() {
  return (

    <div className="App">
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/description' element={ <Description />} />
      </Routes>
   
    </div>
  
  );
}

export default App;
