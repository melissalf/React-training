import { useRef } from "react";
import Modal from "./Modal";

function Tasks({ projectData, onChangeTasks }) {
  const newTask = useRef();
  const modalRef = useRef();

  function handleAddTask() {
    if (newTask.current.value === "") {
      modalRef.current.open();
      return;
    }
    const updateTasks = [
      { text: newTask.current.value, id: Math.random() },
      ...projectData.tasks,
    ];
    onChangeTasks(updateTasks);
    newTask.current.value = "";
  }

  function handleClearTask(taskId) {
    const updateTasks = projectData.tasks.filter(
      (element) => element.id !== taskId
    );
    onChangeTasks(updateTasks);
  }
  return (
    <>
      <Modal ref={modalRef} buttonText="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops looks like you try to add an empty Task
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure that the field is filled.
        </p>
      </Modal>
      <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <div className="flex items-center gap-4">
          <input
            ref={newTask}
            type="text"
            className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          />
          <button
            onClick={handleAddTask}
            className="text-stone-600 hover:text-stone-950"
          >
            Add Task
          </button>
        </div>
        {projectData.tasks.length === 0 ? (
          <p className="text-stone-800 my-4">
            This project does not have any tasks yet.
          </p>
        ) : (
          <ul className="p-4 mt-8 rounded-md bg-stone-100">
            {projectData.tasks.map((element) => {
              return (
                <li className="flex justify-between my-4" key={element.id}>
                  <span>{element.text}</span>
                  <button
                    onClick={() => handleClearTask(element.id)}
                    className="text-stone-700 hover:text-red-500"
                  >
                    Clear
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </>
  );
}

export default Tasks;
