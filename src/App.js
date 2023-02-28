import './App.css';
import Navbar from "./components/Navbar";
import Bio from './components/Bio';
import Blog from './components/Blog';
import Socials from "./components/Socials";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="wrapper">
            <Navbar/>
            <div className="main">
                <Bio/>
            </div>
            <div className="main">
                <Blog/>
            </div>
            <div className="main">
                <Socials/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
