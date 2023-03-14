import Nav from './Components/Nav/Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Components/About/About';
import VideosIndex from './Components/Videos/VideosIndex';
import VideoPlayer from './Components/Videos/VideoPlayer';
import Modal from './Components/Modal/Modal';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<VideosIndex />} />
          <Route path="/about" element={<About />} />
          <Route path="/watch/:videoId" element={<VideoPlayer />} />
          <Route path="/error" element={< Modal />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
