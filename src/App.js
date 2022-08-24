import logo from './logo.svg';
import './App.css';
import CountryList from './CountryList';
import Edit from './Edit';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (

    <div className="App">
    <Router>

      <Routes>
      <Route path="/" element={<CountryList />} />
      <Route path=":id" element={<Edit />} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;
