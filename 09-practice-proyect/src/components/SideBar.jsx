import Button from "./Button";

function SideBar({ onChangeSelect, projectsData, selectedProjectId }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your projects
      </h2>
      <div>
        <Button onClick={() => onChangeSelect(null)}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projectsData.map((element) => {
          let btnClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
          if (selectedProjectId === element.id) {
            btnClasses += " text-stone-200 bg-stone-800";
          } else {
            btnClasses += " text-stone-400";
          }
          return (
            <li key={element.id}>
              <button
                onClick={() => onChangeSelect(element.id)}
                className={btnClasses}
              >
                {element.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default SideBar;
