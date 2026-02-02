import React from 'react'
import "./dock.scss";

const Dock = () => {
  return (
    <footer className='dock'>
      <div className="icon github"><img src="/Dock-icons/github.svg" alt="github-icon" /></div>
      <div className="icon note"><img src="/Dock-icons/note.svg" alt="note-icon" /></div>
      <div className="icon pdf"><img src="/Dock-icons/pdf.svg" alt="pdf-icon" /></div>
      <div className="icon calender"><img src="/Dock-icons/calender.svg" alt="calender-icon" /></div>
      <div className="icon spotify"><img src="/Dock-icons/spotify.svg" alt="spotify-icon" /></div>
      <div className="icon mail"><img src="/Dock-icons/mail.svg" alt="mail-icon" /></div>
      <div className="icon link"><img src="/Dock-icons/link.svg" alt="link-icon" /></div>
      <div className="icon cli"><img src="/Dock-icons/cli.svg" alt="cli-icon" /></div>
    </footer>
  )
}

export default Dock
