import './Navbar.css';
import { GoThreeBars } from 'react-icons/go';
import { useState } from "react";

export default function Navbar() {
    const [iconColor, setIconColor] = useState("#B2B2B2");

    return (
        <div className="wrapper-nav">
            <div className="item options" onMouseEnter={() => setIconColor("white")} onMouseLeave={() => setIconColor("#B2B2B2")}>
                <p style={{ fontSize: "39px", color: iconColor, transition: "0  .5s ease" }}><GoThreeBars/></p>
            </div>
        </div>
    )
}