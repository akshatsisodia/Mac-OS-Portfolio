import "./style.scss";
import Dock from "./components/Dock";
import Nav from "./components/Nav";
import MacWindow from "./components/windows/MacWindow";
import Github from "./components/windows/Github";
import Note from "./components/windows/Note";
import Resume from "./components/windows/Resume";
import Spotify from "./components/windows/Spotify";
import Cli from "./components/windows/Cli";
import { useState } from "react";

const App = () => {

  const [windowState, setWindowState] = useState({
    github:false,
    note:false,
    resume:false,
    spotify:false,
    cli:false
  });

  return (
    <main>
      <Nav windowState={windowState} setWindowState={setWindowState}/>
      <Dock windowState={windowState}  setWindowState={setWindowState}/>
      {windowState.github ? <Github windowName={"github"} setWindowState={setWindowState} windowState={windowState}/> : ""}
      {windowState.note ? <Note windowName={"note"} setWindowState={setWindowState} windowState={windowState}/> :""}
      {windowState.resume ? <Resume windowName={"resume"} setWindowState={setWindowState} windowState={windowState}/> :""}
      {windowState.spotify ? <Spotify windowName={"spotify"} setWindowState={setWindowState} windowState={windowState}/>: ""}
      {windowState.cli ? <Cli windowName={"cli"} setWindowState={setWindowState} windowState={windowState}/>: ""}
    </main>
  );
};

export default App;
