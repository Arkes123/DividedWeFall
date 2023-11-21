import './App.css';
import Navbar from './components/Navbar.jsx';
import Inputs from './components/Inputs.jsx';
import Analysis from './components/Analysis.jsx';
import { useRef } from 'react';


const App = () => {

  const ref = useRef(null);

    const handleOnClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'})
    }

  return (
    <div>
      <Navbar />
      <Inputs OnClick={handleOnClick}/>
      <div id="cat-div"></div>
      <Analysis ref={ref} text="Our Analysis"/>
    </div>
  );
};

export default App;
