import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Questions from './pages/Questions';
import Settings from './pages/Settings';
import FinalScreen from './pages/FinalScreen';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container maxWidth="sm">
          <Box textAlign="center" mt={5}>
            <Typography variant="h2" fontWeight="bold"> Quiz App</Typography>
            <Routes>
              <Route path='/questions' element={<Questions />} />
              <Route path='/' element={<Settings />} />
              <Route path='/score' element={<FinalScreen />} />
            </Routes>
          </Box>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
