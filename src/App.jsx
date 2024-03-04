import { useSelector } from "react-redux";

import Header from "./components/Header";
import Card from "./components/Card";
import AddTaskModal from "./components/AddTaskModal";

import s from "./app.module.css";

function App() {
  const todos = useSelector((state) => state.todos.filteredTodos);

  return (
    <div className={`container ${s.customContainer}`}>
      <Header />
      <main>
        <ul className={s.todoList}>
          {todos.length ? (
            todos.map((todo) => (
              <Card
                title={todo.title}
                isCompleted={todo.isCompleted}
                id={todo.id}
                key={todo.id}
              />
            ))
          ) : (
            <li>No todos yet</li>
          )}
        </ul>
        <AddTaskModal />
      </main>
    </div>
  );
}

export default App;
