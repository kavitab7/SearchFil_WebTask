import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SearchResult from './pages/SearchResult';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<SearchResult />} />
      </Routes>
    </>
  );
}

export default App;
