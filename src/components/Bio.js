import Typical from "react-typical";
import "./Bio.css";

function Bio() {
  return (
    <div className="bio-wrapper">
      <div>
        <img className="bio-img" alt="bio" src="https://media.istockphoto.com/id/1344688156/photo/portrait-of-a-man-using-a-computer-in-a-modern-office.jpg?b=1&s=170667a&w=0&k=20&c=AAVVOvN9uY1Rd_0QsWb8WvBN-4VSUdCORiZx51s5OLc="></img>
      </div>
      <h1 className="title">Hello, I'm Mark 👋</h1>
      <p className="descr">
        I'm a <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
            "Web Developer 🖥️",
            1000,
            "Future Entrepreneur 🚀",
            1000,
            "Basketball Player 🏀",
            1000,
            "Volunteer 🤝",
            1000,
            "Creative Thinker 🧠",
            1000,
            "Learner 📚",
            1000,
          ]} />
          

      </p>
    </div>
  )
}

export default Bio