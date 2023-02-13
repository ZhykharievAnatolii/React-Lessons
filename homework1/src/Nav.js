import React from "react";
export const Nav=()=>{
    return(
        <div className="">
        <ul className="nav flex-column">
            <li className="nav-item">
                <p className="card-text">How to reach me</p>
                <a href="https://github.com/ZhykharievAnatolii" className="btn btn-primary bg-dark">Link to my GitHub page</a>
            </li>
            <li className="nav-item">
                <a href="mailto:nekijt87@gmail.com" className="btn btn-primary bg-dark">email me</a>
            </li>
            <li className="nav-item">
                <a href="tel:+30634726870" className="btn btn-primary bg-dark">call me or send a message</a>
            </li>
        </ul>
        </div>
    )
}