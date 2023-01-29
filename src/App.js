import './App.css';
import Navbar from "./components/Navbar";
import Bio from './components/Bio';

function App() {
  return (
    <div className="wrapper">
        <Navbar />
      <div className="main">
          <Bio />
      </div>
    </div>
  );
}

export default App;
