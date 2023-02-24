import React , {Component}  from "react";
import "./Sidebar.css";
class Sidebar extends Component {
    render() {
        return <div className="sidebar" >
            <div >
                <ul>
                    <li><a href="#link">Home</a></li>        
                    <li><a href="#link">Info</a></li>
                    <li><a href="mailto:nekijt87@gmail.com">Email me</a></li>
                </ul>
            </div>
        </div>;
    }
  }
export default Sidebar;
  