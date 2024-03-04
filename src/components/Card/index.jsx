import { useDispatch } from 'react-redux'

import { updateTodo } from '../../redux/slices/todos/slice'

import styles from './Card.module.css'

function Card(props) {
  const { title, isCompleted, id } = props

  const dispatch = useDispatch()

  const toggleCompleted = () => {
    dispatch(updateTodo({ title, id, 'isCompleted': !isCompleted }))
  }

  return (
    <li className={`card ${styles.customCard}`}>
      <div className="card-body">
        <button
          className={`card-title ${styles.customCardTitle} ${
            isCompleted ? styles.completed : ''
          }`}
          title="Toggle completed"
          onClick={toggleCompleted}
        >
          {title}
        </button>
      </div>
    </li>
  )
}

export default Card
