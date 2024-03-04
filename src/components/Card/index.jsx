import { useDispatch } from "react-redux";

import { updateTodo } from "../../redux/slices/todos/slice";

import s from "./Card.module.css";

function Card(props) {
  const { title, isCompleted, id } = props;

  const dispatch = useDispatch();

  const toggleCompleted = () => {
    dispatch(updateTodo({ title, id, isCompleted: !isCompleted }));
  };

  return (
    <li className={`card ${s.customCard}`}>
      <div className="card-body">
        <button
          className={`card-title ${s.customCardTitle} ${
            isCompleted ? s.completed : ""
          }`}
          title="Mark as completed"
          onClick={toggleCompleted}
        >
          {title}
        </button>
      </div>
    </li>
  );
}

export default Card;
