import React from "react";
import "./cli.scss";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";

const commands = {
  echo: {
    description: "Echo a passed string.",
    usage: "echo <string>",
    fn: (...args) => args.join(" "),
  },
  hello: {
    description: "Greetings for the Viewer",
    usage: "hello",
    fn: () => (
      <div>
        <div>hello, what you wanna see just tell me, </div>
        <div>Type `projects` to see selected work, or `skills` / `projects` / `about`.</div>
      </div>
    ),
  },
  about: {
    description: "Short bio about me.",
    usage: "about",
    fn: () => (
      <div>
        <div>Hi — I&apos;m Akshat Sisodia, a frontend developer building interactive web experiences.</div>
        <div>Type `projects` to see selected work, or `github` / `resume` / `contact`.</div>
      </div>
    ),
  },
  projects: {
    description: "List selected projects with links.",
    usage: "projects",
    fn: () => (
      <div>
        <div>
          1. Portfolio site —{" "}
          <a href="https://github.com/akshatsisodia/portfolio" target="_blank" rel="noopener noreferrer">
            github.com/akshatsisodia/portfolio
          </a>
        </div>
        <div>
          2. Music player demo —{" "}
          <a href="https://github.com/akshatsisodia/spotify-clone" target="_blank" rel="noopener noreferrer">
            spotify-clone
          </a>
        </div>
        <div>
          3. Notes app —{" "}
          <a href="https://github.com/akshatsisodia/notes" target="_blank" rel="noopener noreferrer">
            notes
          </a>
        </div>
      </div>
    ),
  },
  github: {
    description: "Open my GitHub profile link.",
    usage: "github",
    fn: () => (
      <a href="https://github.com/akshatsisodia" target="_blank" rel="noopener noreferrer">
        https://github.com/akshatsisodia
      </a>
    ),
  },
  resume: {
    description: "Link to my resume (PDF).",
    usage: "resume",
    fn: () => (
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        Open Resume (PDF)
      </a>
    ),
  },
  contact: {
    description: "Contact information.",
    usage: "contact",
    fn: () => (
      <div>
        <div>
          Email: <a href="mailto:akshat@example.com">akshatsisodia77@gmail.com</a>
        </div>
        <div>
          Twitter:{" "}
          <a href="https://twitter.com/akshatsisodia" target="_blank" rel="noopener noreferrer">
            @akshatsisodia
          </a>
        </div>
      </div>
    ),
  },
  skills: {
    description: "Lists key skills.",
    usage: "skills",
    fn: () => "React · JavaScript · HTML · CSS/Sass · Vite · UI design",
  },
  date: {
    description: "Show current date and time.",
    usage: "date",
    fn: () => new Date().toString(),
  },
};

const Cli = ({windowName,setWindowState,windowState}) => {
  const welcome = (
    <div>
      <div className="cli-welcome-title">Welcome to Akshat&apos;s interactive terminal</div>
      <div className="cli-welcome-sub">
        Type <strong>help</strong> to list commands try <strong>projects</strong> or <strong>about</strong>.
      </div>
    </div>
  );

  return (
    <MacWindow width="30vw" windowName={windowName} setWindowState={setWindowState} windowState={windowState}>
      <div className="cli-window">
        <div className="terminal-shell">
          <Terminal
            commands={commands}
            welcomeMessage={welcome}
            promptLabel={"Portfolio@terminal~$"}
            style={{
              width: "100%",
              height: "100%",
              color: "#b9f286",
              fontFamily: "Menlo, Monaco, 'Courier New', monospace",
            }}
            inputAreaStyle={{
              background: "rgba(255,255,255,0.02)",
              borderRadius: "6px",
              paddingTop: "0.6rem",
            }}
            messageStyle={{ color: "#b9f286", lineHeight: "1.6"}}
            promptLabelStyle={{ color: "#7fffbf", fontWeight: 600,fontSize:"1.2rem" }}
            inputStyle={{ fontSize: "1.2rem", color: "#e6ffe9", caretColor: "#7fffbf" }}
            autofocus={true}
          />
        </div>
      </div>
    </MacWindow>
  );
};

export default Cli;
