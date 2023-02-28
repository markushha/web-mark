import Typical from "react-typical";
import "./Bio.css";

// npm i react-typical --legacy-peer-deps

function Bio() {
  return (
    <>
      <div className="bio-wrapper">
        <div>
          <img className="bio-img" alt="bio" src="/bio.jpg"></img>
        </div>
        <h1 className="title">Hello, I'm Mark</h1>
        <p className="descr">
          I'm a{" "}
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              "Web Developer 🖥️",
              1000,
              "Starting Freelancer 💸",
              1000,
              "Basketball Player 🏀",
              1000,
              "Volunteer 🤝",
              1000
            ]}
          />
        </p>
      </div>
    </>
  );
}

export default Bio;
