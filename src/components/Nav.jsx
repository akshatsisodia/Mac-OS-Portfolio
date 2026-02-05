import React from 'react'
import "./nav.scss";
import DateTime from './DateTime';

const Nav = ({windowState ,setWindowState}) => {
  return (
    <nav>
        <div className="left">
            <div className="apple-icon"
            onClick={()=>{
                window.open("https://www.apple.com/in/imac/?afid=p240%7Cgo~cmp-11182149775~adg-109263622453~ad-780589903562_kwd-22511541~dev-c~ext-~prd-~mca-~nt-search&cid=aos-in-kwgo-mac--","_blank");
            }}
            >
                <img src="./Navbar-icons/apple.svg" alt="apple-icon" />
            </div>
            <div className="nav-item"
            onClick={()=>{
                window.open("http://localhost:5173");
            }}
            >
                <p>Akshat Sisodia</p>
            </div>
            <div className="nav-item">
                <p>File</p>
            </div>
            <div
            className="nav-item">
                <p>Window</p>
            </div>
            <div className="nav-item"
            onClick={()=>{
                if(!windowState.cli){
                    setWindowState({...windowState,cli:true});
                }
            }} 
            >
                <p>Terminal</p>
            </div>
        </div>
        <div className="right">
            <div className="nav-item">
                <img src="./Navbar-icons/wifi.svg" alt="wifi-icon" />
            </div>
            <DateTime/>
        </div>
    </nav>
  )
}

export default Nav