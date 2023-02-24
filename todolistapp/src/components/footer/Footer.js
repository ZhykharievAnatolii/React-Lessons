import React , {Component}  from "react";
import "./Footer.css";
class Footer extends Component {
    render() {
        return <footer className="footer-main">
        <div className="container">
            <div className="footer-content">
                Whant to collaborate?
                <a href="mailto:nekijt87@gmail.com" className="mail">email me </a>
            </div>
        </div>
            
        </footer>;
    }
  }
export default Footer;