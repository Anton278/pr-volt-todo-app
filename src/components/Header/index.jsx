import { useDispatch, useSelector } from 'react-redux'

import { setFilterBy } from '../../redux/slices/todos/slice'

import styles from './Header.module.css'

function Header() {
  const dispatch = useDispatch()
  const completedTodosCount = useSelector(
    (state) => state.todos.completedTodosCount,
  )
  const uncompletedTodosCount = useSelector(
    (state) => state.todos.uncompletedTodosCount,
  )
  const filterBy = useSelector((state) => state.todos.filterBy)

  return (
    <header className={styles.header}>
      <div className={styles.headerLeftCol}>
        <p>
          Completed tasks: <b>{completedTodosCount}</b>
        </p>
        <p>
          Uncompleted tasks: <b>{uncompletedTodosCount}</b>
        </p>
      </div>
      <div className={styles.headerRightCol}>
        <div>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#addTaskModal"
          >
            <i className="bi bi-plus"></i>
            Add
          </button>
        </div>
        <div>
          <select
            className="form-select"
            value={filterBy}
            onChange={(ev) => dispatch(setFilterBy(ev.target.value))}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Current</option>
          </select>
        </div>
      </div>
    </header>
  )
}

export default Header
