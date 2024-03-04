import { useSelector } from 'react-redux'

import _Header from './components/Header'
import _Card from './components/Card'
import _AddTaskModal from './components/AddTaskModal'

import styles from './app.module.css'

function App() {
  const todos = useSelector((state) => state.todos.filteredTodos)

  return (
    <div className={`container ${styles.customContainer}`}>
      <_Header />
      <main>
        <ul className={styles.todoList}>
          {todos.length > 0 ? (
            todos.map((todo) => (
              <_Card
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
        <_AddTaskModal />
      </main>
    </div>
  )
}

export default App
