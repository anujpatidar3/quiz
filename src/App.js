import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Questions from './pages/Questions';
import Settings from './pages/Settings';
import FinalScreen from './pages/FinalScreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/questions' element={<Questions />} />
          <Route path='/' element={<Settings />} />
          <Route path='/score' element={<FinalScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
