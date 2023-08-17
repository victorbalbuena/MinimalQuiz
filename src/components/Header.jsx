import { useState } from "react";
import Modal from "./Modal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="px-2 py-4 bg-slate-200">
      <div className="mx-auto max-w-7xl pb-1 flex justify-between items-center ">
        <h2 className="text-2xl lg:text-3xl font-bold text-purple-500">
          Minimal Quiz
        </h2>
        <button
          onClick={openModal}
          className="py-2 px-3 bg-purple-500 text-white rounded-md hover:bg-purple-600"
        >
          Agregar pregunta
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h1 className="text-xl font-semibold mb-4">Agregar Pregunta</h1>
        <hr className="mb-4" />
        <form className="flex flex-col gap-2 lg:flex-row lg:flex-wrap">
          <div className="flex flex-col gap-1 basis-3/4 flex-1">
            <label htmlFor="" className="font-semibold">
              Pregunta:
            </label>
            <input type="text" className="rounded-lg shadow-sm" />
          </div>

          <div className="flex flex-col gap-1 basis-1/3 flex-1">
            <label htmlFor="" className="font-semibold">
              Respuesta Correcta:
            </label>
            <input type="text" className="rounded-lg shadow-sm" />
          </div>

          <div className="flex flex-col gap-1 basis-1/3 flex-1">
            <label htmlFor="" className="font-semibold">
              Respuesta Incorrecta 1:
            </label>
            <input type="text" className="rounded-lg shadow-sm" />
          </div>
          <div className="flex flex-col gap-1 basis-1/3 flex-1">
            <label htmlFor="" className="font-semibold">
              Respuesta Incorrecta 2:
            </label>
            <input type="text" className="rounded-lg shadow-sm" />
          </div>
          <div className="flex flex-col gap-1 basis-1/3 flex-1 mb-4">
            <label htmlFor="" className="font-semibold">
              Respuesta Incorrecta 3:
            </label>
            <input type="text" className="rounded-lg shadow-sm" />
          </div>
        </form>
        <hr className="mb-4" />
        <div className="flex justify-end gap-2 ">
          <button className="py-2 px-3 rounded-md bg-blue-500 hover:bg-blue-600 text-white transition-all">
            Agregar
          </button>
          <button
            className="p-2 rounded-md bg-slate-500 hover:bg-slate-600 text-white transition-all"
            onClick={closeModal}
          >
            Cancelar
          </button>
        </div>
      </Modal>
    </header>
  );
};

export default Header;
