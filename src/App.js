import './App.css';
import Navbar from "./components/Navbar";
import Bio from './components/Bio';
import Blog from './components/Blog';

function App() {
  return (
    <div className="wrapper">
        <Navbar />
      <div className="main">
          <Bio />
      </div>
      <div className="main">
          <Blog />
      </div>
    </div>
  );
}

export default App;
