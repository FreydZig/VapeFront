import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MyRoutes from './MyRoutes';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<MyRoutes/>}/>
      </Routes>
    </Router>
  );
}

export default App;
