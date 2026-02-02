import "./style.scss";
import Dock from "./components/Dock";
import Nav from "./components/Nav";
import MacWindow from "./components/windows/MacWindow";

const App = () => {
  return (
    <main>
      <Nav />
      <Dock />
      <MacWindow></MacWindow>
    </main>
  );
};

export default App;
