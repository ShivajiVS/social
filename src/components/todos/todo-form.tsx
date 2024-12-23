import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Todo } from "@/lib/localstorage";

export const TodoForm = ({
  onAddTodo,
}: {
  onAddTodo: (todo: Todo) => void;
}) => {
  const [todo, setTodo] = useState<{ title: string; description: string }>({
    title: "",
    description: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newTodo = {
      ...todo,
      id:crypto.randomUUID()
    };
    onAddTodo(newTodo);
    setTodo({ title: "", description: "" });
  };

  return (
    <Card className="flex items-center max-w-lg py-10 mx-2 rounded-lg lg:mx-auto px-14">
      <form className="w-full space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-2">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="title"
            id="title"
            required
            className="h-10 px-2 border rounded-md outline-none"
            value={todo.title}
            onChange={(e) =>
              setTodo((prev) => ({ ...prev, title: e.target.value }))
            }
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            placeholder="description"
            id="description"
            required
            className="h-10 px-2 border rounded-md outline-none"
            value={todo.description}
            onChange={(e) =>
              setTodo((prev) => ({ ...prev, description: e.target.value }))
            }
          />
        </div>
        <div className="w-full">
          <Button className="w-full px-5 uppercase" type="submit">
            Add
          </Button>
        </div>
      </form>
    </Card>
  );
};
