import React from "react";
import MacWindow from "./MacWindow";
import "./github.scss"
import githubData from "../../assets/github.json";

const GitCard = ({project = {id:1,image:"",title:"",description:"",tags:[],repolink:"",demolink:""}})=>{
  return <>
  <div className="card">
    <img src={project.image} alt="" />
    <h1>{project.title}</h1>
    <p className="description">{project.description}</p>
    <div className="tags">
      {project.tags.map((tag, id)=>{
      return <p key={id} className="tag">{tag}</p>
    })}
    </div>
    <div className="urls">
      <a href={project.repolink}>Github Link</a>
      {/* {project.demolink && <a href={project.demolink}>Demo Link</a>} */}
      {project.demolink? <a href={project.demolink}>Demo Link</a> : ""}
    </div>
  </div>
  </>
}

const Github = ({windowName,setWindowState,windowState}) => {

  console.log(windowName);
  
  
  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState} windowState={windowState}>
      <div className="cards">
        {githubData.map((project, id)=>{
        return <GitCard key={id} project={project}/>
      })}
      </div>
    </MacWindow>
  );
};

export default Github;
