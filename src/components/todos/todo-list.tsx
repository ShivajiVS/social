import { Todo } from "@/lib/localstorage";
import { useNavigate } from "react-router-dom";

const TodoList = ({
  todos,
  onDeleteTodo,
  isEditTodo,
}: {
  todos: Todo[];
  onDeleteTodo: (id: string) => void;
  isEditTodo: (todo: Todo, close?: boolean) => void;
}) => {
  const navigate = useNavigate();

  console.log("tsosos", todos);

  return (
    <div className="w-full max-w-4xl p-4 mx-auto mt-10 bg-white rounded-lg shadow-md">
      <h1 className="mb-6 text-2xl font-bold text-center text-gray-800">
        Todo List
      </h1>
      <table className="w-full text-sm text-gray-600 border border-collapse border-gray-200">
        <thead>
          <tr className="text-gray-700 bg-gray-100">
            <th className="px-4 py-2 text-left border border-gray-300">S.No</th>
            <th className="px-4 py-2 text-left border border-gray-300">
              Title
            </th>
            <th className="px-4 py-2 text-left border border-gray-300">
              Description
            </th>
            <th className="px-4 py-2 text-center border border-gray-300">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {todos.length > 0 ? (
            todos.map((todo, index) => (
              <tr
                key={todo.id}
                className={`hover:bg-gray-50 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="px-4 py-2 border border-gray-300">
                  {index + 1}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {todo.title}
                </td>
                <td className="w-1/2 px-4 py-2 border border-gray-300">
                  {todo.description}
                </td>
                <td className="px-4 py-2 text-center border border-gray-300">
                  <button
                    onClick={() => navigate(`/todo/${todo.id}`)}
                    className="px-3 py-1 mr-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                  >
                    View
                  </button>
                  <button
                    onClick={() => isEditTodo(todo)}
                    className="px-3 py-1 mr-2 text-white bg-yellow-500 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDeleteTodo(todo.id)}
                    className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={4}
                className="py-4 text-center text-gray-500 border border-gray-300"
              >
                No todos available. Add some!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
