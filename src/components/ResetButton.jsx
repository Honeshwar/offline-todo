import { useContextValue } from "../context/todoContext";

function ResetButton() {
  const { resetTodosHandler } = useContextValue();
  return (
    <button
      className=" w-fit fixed bottom-5 right-0 left-0 mx-auto bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-full"
      onClick={resetTodosHandler}
    >
      {" "}
      Reset All Todos{" "}
    </button>
  );
}

export default ResetButton;
