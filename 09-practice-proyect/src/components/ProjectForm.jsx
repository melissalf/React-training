import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

function ProjectForm({ onSaveProject, onCancel }) {
  const inputRef = useRef({
    title: "",
    description: "",
    date: "",
  });
  const modalRef = useRef();

  function handleSave() {
    //validation
    if (
      inputRef.current.title.value === "" ||
      inputRef.current.description.value === "" ||
      inputRef.current.date.value === ""
    ) {
      // error modal
      modalRef.current.open();
      return;
    }
    //pass validation then saved
    onSaveProject({
      title: inputRef.current.title.value,
      description: inputRef.current.description.value,
      date: inputRef.current.date.value,
      tasks: [],
    });
  }
  return (
    <>
      <Modal ref={modalRef} buttonText="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops looks like you leave some empty values there
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure that all the field are filled.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={() => onCancel(undefined)}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input
            type="text"
            label="Title"
            ref={(ref) => (inputRef.current.title = ref)}
          />
          <Input
            type="text"
            label="Description"
            isTextarea={true}
            ref={(ref) => (inputRef.current.description = ref)}
          />
          <Input
            type="date"
            label="Due Date"
            ref={(ref) => (inputRef.current.date = ref)}
          />
        </div>
      </div>
    </>
  );
}

export default ProjectForm;
