import React from "react";
import "./dock.scss";

const Dock = ({ windowState, setWindowState }) => {
  return (
    <footer className="dock">
      <div className="icon github">
        <img
          src="/Dock-icons/github.svg"
          alt="github-icon"
          onClick={() => {
            setWindowState({ ...windowState, github: true });
          }}
        />
      </div>
      <div className="icon note">
        <img
          src="/Dock-icons/note.svg"
          alt="note-icon"
          onClick={() => {
            setWindowState({ ...windowState, note: true });
          }}
        />
      </div>
      <div className="icon pdf">
        <img
          src="/Dock-icons/pdf.svg"
          alt="pdf-icon"
          onClick={() => {
            setWindowState({ ...windowState, resume: true });
          }}
        />
      </div>
      <div className="icon calender"
      onClick={()=>{
        window.open("https://calendar.google.com","_blank")
      }}
      >
        <img src="/Dock-icons/calender.svg" alt="calender-icon" />
      </div>
      <div className="icon spotify">
        <img
          src="/Dock-icons/spotify.svg"
          alt="spotify-icon"
          onClick={() => {
            setWindowState({ ...windowState, spotify: true });
          }}
        />
      </div>
      <div className="icon mail"
      onClick={()=>{
        window.open("mailto:akshatsisodia77@gmail.com","_blank");
      }}
      >
      <img src="/Dock-icons/mail.svg" alt="mail-icon" />
      </div>
      <div className="icon link"
      onClick={()=>{
        window.open("https://www.linkedin.com/in/akshat-s-a3aab8228/","_blank")
      }}
      >
        <img src="/Dock-icons/link.svg" alt="link-icon" />
      </div>
      <div className="icon cli">
        <img
          src="/Dock-icons/cli.svg"
          alt="cli-icon"
          onClick={() => {
            setWindowState({ ...windowState, cli: true });
          }}
        />
      </div>
    </footer>
  );
};

export default Dock;
