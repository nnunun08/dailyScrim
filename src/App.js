import { Routes, Route, } from 'react-router-dom';
import Home from './Home';
import Page1 from './screens/Page1';
import Page2 from './screens/Page2';
import Page3 from './screens/Page3';
import Page4 from './screens/Page4';
import Page5 from './screens/Page5';
import Page6 from './screens/Page6';
import Page7 from './screens/Page7';
import Page8 from './screens/Page8';
import Page9 from './screens/Page9';
import Page10 from './screens/Page10';
import Page11 from './screens/Page11';
import Page12 from './screens/Page12';
import Page13 from './screens/Page13';
import Page14 from './screens/Page14';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' Component={Home} exact />
        <Route path='/Page1' Component={Page1} exact />
        <Route path='/Page2' Component={Page2} exact />
        <Route path='/Page3' Component={Page3} exact />
        <Route path='/Page4' Component={Page4} exact />
        <Route path='/Page5' Component={Page5} exact />
        <Route path='/Page6' Component={Page6} exact />
        <Route path='/Page7' Component={Page7} exact />
        <Route path='/Page8' Component={Page8} exact />
        <Route path='/Page9' Component={Page9} exact />
        <Route path='/Page10' Component={Page10} exact />
        <Route path='/Page11' Component={Page11} exact />
        <Route path='/Page12' Component={Page12} exact />
        <Route path='/Page13' Component={Page13} exact />
        <Route path='/Page14' Component={Page14} exact />

      </Routes>
    </div>
  );
}

export default App;
