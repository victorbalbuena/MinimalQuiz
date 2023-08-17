const StartButton = () => {
  return (
    <div className="mx-auto max-w-7xl py-[30vh] pb-1 flex justify-center items-center">
      <div className="rounded-full bg-blue-100 w-60 h-60 flex items-center justify-center animation-zoom">
        <button className="rounded-full bg-blue-400 font-semibold text-white text-2xl w-44 h-44 uppercase motion-safe:animate-pulse ">
          Comenzar
        </button>
      </div>
    </div>
  );
};

export default StartButton;
