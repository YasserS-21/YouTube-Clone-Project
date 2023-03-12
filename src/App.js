import Nav from './Components/Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Components/About';
import VideosIndex from './Components/VideosIndex';
import VideoPlayer from './Components/VideoPlayer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<VideosIndex/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/watch/:videoId" element={<VideoPlayer/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
