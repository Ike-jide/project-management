import { useState } from "react";
import NewProject from "./componets/NewProject";
import NoPrpjectSelected from "./componets/NoProjectSelected";
import ProjectSidebar from "./componets/ProjectSidebar";

function App() {
  const [projectsState,setProjectsState]= useState({
    selectedProjectId:undefined,
    projects:[]
  })
  function handleStartAddProject(){
    setProjectsState((prevState)=>{
      return{
        ...prevState,
        selectedProjectId:null
      }
    })
  }
  function handleAddProject(projectData){
    setProjectsState((prevState)=>{
      const projectId = Math.random( )
      const newProject ={
        ...projectData,
        id: projectId
      }
   return{
    ...prevState,
    projects: [...prevState.projects,newProject ],
    selectedProjectId:undefined  
   }
    })
  }
  let content;
  if(projectsState.selectedProjectId=== null){
    content=<NewProject onAdd={handleAddProject}/>
  }else if (projectsState.selectedProjectId === undefined){
    content = <NoPrpjectSelected onStartAddProject={handleStartAddProject}/>
  }
  console.log(projectsState)
  return (
    <main className="h-screen my-8 flex gap-8">
     <ProjectSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects}/>
     {content}
    </main>
  );
}

export default App;
