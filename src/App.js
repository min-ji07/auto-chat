import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Main from './routes/Main';
import Chat from './components/Chat';
import './common.css';

function App() {
  return (
    // 굳이 router 없으면 필요 없을지도
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
