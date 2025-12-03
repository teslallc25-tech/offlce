import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Home from './components/home.jsx/index.jsx'
import Loginpage from './components/loginpage.jsx/index.jsx'
import Logform from './components/logform/index.jsx';
import Adnminlogin  from './components/adminlogin/index.jsx';
import Dashboard from './components/admindashboard/admindashboard.jsx';

function App() {

  return (
    <Router>

    <div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/logg" element={<Logform />} />
      <Route path="/adminlogin" element={<Adnminlogin />} />
      <Route path="/dashboard" element={<Dashboard />} />

    </Routes>
    </div>

      
    </Router>
  )
}

export default App
