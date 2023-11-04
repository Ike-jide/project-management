import NewProject from "./componets/NewProject";
import ProjectSidebar from "./componets/ProjectSidebar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
     <ProjectSidebar/>
     <NewProject/>
    </main>
  );
}

export default App;
