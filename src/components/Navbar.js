import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";

const NavBar = (props) => {

    return (
        <div>
            <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsWave</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{color: props.mode==='dark'?'black':'white'}} >
                            <li className="">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item" ><Link className="nav-link" to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>

                        </ul>

                        <label className="switch">
                            <input type="checkbox"  onClick={props.toggleMode}/>
                            <span className="slider round"></span>
                        </label>
                        <label className='toggleModeLabel' style={{color: props.mode==='dark'?'#c6c1c1':'grey'}} >Enable {props.ToggleMode}</label>


                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavBar