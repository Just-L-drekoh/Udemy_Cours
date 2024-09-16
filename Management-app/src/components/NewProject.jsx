import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
import ModalText from "./ModalText";
export default function NewProject({ onAddProject, onCancel }) {
  const modalRef = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const project = {
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
    };
    if (
      project.title.trim() === "" ||
      project.description.trim() === "" ||
      project.dueDate.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }
    onAddProject(project);
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
        <ModalText>Oops ... looks like you forgot to enter a value.</ModalText>
        <ModalText>
          Please make sure you provide a valid value for input fields.
        </ModalText>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input label="Title" ref={title} type="text" />
          <Input label="Description" textarea ref={description} />
          <Input label="Due Date" ref={dueDate} type="date" />
        </div>
      </div>
    </>
  );
}
