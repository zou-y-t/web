import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './app/HomeSite/home';
import User from './app/UserSite/user';
import Contest from './app/ContestSite/contest';
import ErrorPage from './app/ErrorSite/errorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/contest" element={<Contest />} />
      </Routes>
    </Router>
  );
}

export default App;
