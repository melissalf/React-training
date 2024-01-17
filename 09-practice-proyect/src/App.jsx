import { useState } from "react";
import EntryContent from "./components/EntryContent";
import ProjectForm from "./components/ProjectForm";
import SideBar from "./components/SideBar";
import ProjectInfo from "./components/Projectinfo";

const DEFAULT_PROJECTS = {
  selectedProject: undefined,
  projects: [],
};

function App() {
  const [projectsState, setProjectsState] = useState(DEFAULT_PROJECTS);

  function handleChangeSelectedProject(projectId) {
    setProjectsState((prevProjectState) => {
      return {
        ...prevProjectState,
        selectedProject: projectId,
      };
    });
  }

  function handleAddProject(newProject) {
    setProjectsState((prevProjectState) => {
      return {
        projects: [
          ...prevProjectState.projects,
          { ...newProject, id: Math.random() },
        ],
        selectedProject: undefined,
      };
    });
  }

  function handleDeleteProject(projectId) {
    setProjectsState((prevProjectState) => {
      const updatedProjects = prevProjectState.projects.filter(
        (element) => element.id !== projectId
      );
      return {
        projects: [...updatedProjects],
        selectedProject: undefined,
      };
    });
  }

  function handleSaveTasks(projectTasks) {
    setProjectsState((prevProjectState) => {
      const noTargetProjects = prevProjectState.projects.filter(
        (element) => element.id !== prevProjectState.selectedProject
      );
      const targetProject = prevProjectState.projects.find((element) => {
        return element.id === prevProjectState.selectedProject;
      });
      return {
        ...prevProjectState,
        projects: [
          ...noTargetProjects,
          { ...targetProject, tasks: projectTasks },
        ],
      };
    });
  }
  console.log(projectsState);

  let content;
  if (projectsState.selectedProject === undefined) {
    content = <EntryContent onCreateProject={handleChangeSelectedProject} />;
  } else if (projectsState.selectedProject === null) {
    content = (
      <ProjectForm
        onSaveProject={handleAddProject}
        onCancel={handleChangeSelectedProject}
      />
    );
  } else {
    const selectedContent = projectsState.projects.find((element) => {
      return element.id === projectsState.selectedProject;
    });
    content = (
      <ProjectInfo
        projectData={selectedContent}
        onDelete={handleDeleteProject}
        onChangeTasks={handleSaveTasks}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        onChangeSelect={handleChangeSelectedProject}
        projectsData={projectsState.projects}
        selectedProjectId={projectsState.selectedProject}
      />
      {content}
    </main>
  );
}

export default App;
