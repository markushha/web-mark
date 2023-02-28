import './Socials.css';
import {SocialIcon} from 'react-social-icons';
import {useState} from "react";

export default function Socials() {
    const [socials, ] = useState([
        {
            url: "https://www.instagram.com/marx2do/",
            bgColor: "white"
        },
        {
            url: "https://t.me/marx2do",
            bgColor: "white"
        },
        {
            url: "https://www.youtube.com/@rightp1que612",
            bgColor: "white"
        },
        {
            url: "https://github.com/markushha",
            bgColor: "white"
        }
    ]);

        return (<div className="socials-wrapper">
            <h2>You can contact and find me here</h2>
            <div className="socials">
                {socials.map((item, index) => {
                    return <SocialIcon key={index} url={item.url} bgColor={socials[index].bgColor}
                                       onMouseEnter={() => {
                                           socials[index].bgColor = "gray";
                                       }}
                                       onMouseLeave={() => {
                                           socials[index].bgColor = "white";
                                       }}
                    />
                })}
            </div>
        </div>)
    }