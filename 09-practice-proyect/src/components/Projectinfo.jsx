import Tasks from "./Tasks";

function ProjectInfo({ projectData, onDelete, onChangeTasks }) {
  const formattedDate = new Date(projectData.date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {projectData.title}
          </h1>
          <button
            onClick={() => onDelete(projectData.id)}
            className="text-stone-700 hover:text-stone-950"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {projectData.description}
        </p>
      </header>
      <Tasks onChangeTasks={onChangeTasks} projectData={projectData} />
    </div>
  );
}

export default ProjectInfo;
