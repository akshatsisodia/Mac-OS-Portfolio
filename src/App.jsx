import "./style.scss";
import Dock from "./components/Dock";
import Nav from "./components/Nav";
import MacWindow from "./components/windows/MacWindow";
import Github from "./components/windows/Github";
import Note from "./components/windows/Note";

const App = () => {
  return (
    <main>
      <Nav />
      <Dock />
      <Github/>
      <Note/>
    </main>
  );
};

export default App;
