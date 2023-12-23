import Card from "./Card";

function List({ heading, todos, isCompleted = false }) {
  return (
    <div className="w-full flex flex-col gap-5  md:pb-5 ">
      <hr />
      <h3 className="w-full text-center text-xl font-bold">{heading}</h3>
      <div className="w-full  flex flex-wrap justify-center gap-5 bg-gray-200 p-5 rounded">
        {todos?.map((todo, index) => (
          <Card key={index} todo={todo} isCompleted={isCompleted} />
        ))}

        {todos?.length === 0 && (
          <p className="text-center">
            {isCompleted ? "No Completed Todos" : "No UnCompleted Todos"}
          </p>
        )}
      </div>
    </div>
  );
}

export default List;
