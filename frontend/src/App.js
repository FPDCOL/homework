import react from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Letter from './letter';
import Message from './message';
import './index.css';

function App() {

return (
  <Router>
    <Routes>
      <Route path='/letter' element={<Letter/>}/>
      <Route path='/message' element={<Message/>}/>
    </Routes>
  </Router>
);
}

export default App;