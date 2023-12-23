import { useContextValue } from "../context/todoContext";

function Card({ todo, isCompleted = false }) {
  const { markedAsCompletedHandler } = useContextValue();
  return (
    <div
      className={` w-full  p-5 rounded cursor-pointer ${
        isCompleted ? " bg-green-300 " : "bg-blue-300"
      } flex flex-row gap-2 items-center`}
      onClick={() => markedAsCompletedHandler(todo.id)}
    >
      <span
        className={` rounded p-1 px-2 ${
          isCompleted
            ? " text-white font-bold  bg-green-500 text-[10px] md:text-[13px]"
            : "w-[15px] h-[15px] md:w-[20px] md:h-[20px] bg-white"
        }`}
      >
        {isCompleted ? "✓" : ""}
      </span>
      <p className={`w-full text-center ${isCompleted ? "line-through" : ""}`}>
        {todo.text}
      </p>
    </div>
  );
}

export default Card;
