import React from "react";
import './index.css'
export const Header=()=>{
    return(<nav className="navbar navbar-expand-lg bg-body-tertiary">
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

    )
}