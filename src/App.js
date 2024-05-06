import { Routes, Route, } from 'react-router-dom';
import Home from './Home';
import Page1 from './screens/Page1';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' Component={Home} exact />
        <Route path='/Page1' Component={Page1} exact />
      </Routes>
    </div>
  );
}

export default App;
