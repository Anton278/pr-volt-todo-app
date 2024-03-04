import { useSelector } from "react-redux";

import Header from "./components/Header";
import Card from "./components/Card";
import AddTaskModal from "./components/AddTaskModal";

import s from "./app.module.css";

function App() {
  const todos = useSelector((state) => state.todos.todos);
  const filterBy = useSelector((state) => state.todos.filterBy);

  return (
    <>
      <div className={`container ${s.customContainer}`}>
        <Header />
        <main>
          <ul className={s.todoList}>
            {todos
              .filter(
                (todo) =>
                  filterBy === "all" ||
                  (filterBy === "completed"
                    ? todo.isCompleted
                    : !todo.isCompleted)
              )
              .map((todo) => (
                <Card
                  title={todo.title}
                  isCompleted={todo.isCompleted}
                  id={todo.id}
                  key={todo.id}
                />
              ))}
          </ul>
          <AddTaskModal />
        </main>
      </div>
    </>
  );
}

export default App;
