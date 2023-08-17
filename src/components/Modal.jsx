const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30 transition-opacity duration-500 ease-in opacity-100 zoom-entry`}
    >
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <button
          className="float-right text-gray-500 hover:text-gray-600"
          onClick={onClose}
        >
          <span className="font-semibold text-2xl">x</span>
        </button>
        {children}{" "}
        {/* Aqui va lo que se ponga entre las etiquetas del llamado de el component*/}
      </div>
    </div>
  );
};

export default Modal;
