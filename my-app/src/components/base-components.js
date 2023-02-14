import React from "react";

class Header extends React.Component {
    render() {
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Zhykhariev Anatolii</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/ZhykharievAnatolii">Github page</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                My works
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="https://zhykharievanatolii.github.io/">Markup portfolio project</a></li>
                                <li><a className="dropdown-item" href="https://github.com/ZhykharievAnatolii/Fine-Client">Fine-Client App</a></li>
                                <li><a className="dropdown-item" href="https://github.com/ZhykharievAnatolii/reactWorks">React works</a></li>
                                <li><a className="dropdown-item" href="https://github.com/ZhykharievAnatolii/Client-Server-App">Client-Server App</a></li>
                                <li><a className="dropdown-item" href="https://github.com/ZhykharievAnatolii/ClockApplication">Clock Application</a></li>
                                <li><a className="dropdown-item" href="https://github.com/ZhykharievAnatolii/adaptiveproject">Markup adaptive project</a></li>
                                <li><a className="dropdown-item" href="https://github.com/ZhykharievAnatolii/chevronnavmenuproject">Chevron markup project</a></li>
                                <li><a className="dropdown-item" href="mailto:nekijt87@gmail.com">Whant to collaborate?</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    }
}

class MainContainer extends React.Component {
    render() {
        return (  <div className="">
            <div className="card" style={{"width": "18rem"}}>
                <img src={Photo} className="card-img-top" alt="my photo"/>
                <div className="card-body">
                    <p className="card-text">
                        Hi, I’m ZhykharievAnatolii
                        I’m a Frontend developer
                        I’m currently learning JavaScript.
                        I like the chosen field of activity and I have experience in continuous learning.
                        I study every day, and I am happy to learn something new.
                        I'm a disciplined and neat person, I happily spend time learning something new.
                        My previous work from the very beginning organizes me for continuous development,
                        and I am able to quickly remember and use new knowledge in practice.
                    </p>
                </div>
            </div>
        </div>)
    }
}

class SideNav extends React.Component {
    render() {
        return (   <div className="">
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
        </div>)
    }
}

export {Header, SideNav, MainContainer}