import { useFormik } from 'formik'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'

import { addTaskSchema } from '../../utils/add-task-schema'
import { addTodo } from '../../redux/slices/todos/slice'

function AddTaskModal() {
  const dispatch = useDispatch()
  const closeBtnRef = useRef()

  const onSubmit = ({ title }) => {
    dispatch(addTodo({ title, 'isCompleted': false }))
    closeBtnRef.current.click()
    formik.setFieldValue('title', '', false)
  }

  const formik = useFormik({
    'initialValues': {
      'title': '',
    },
    'validationSchema': addTaskSchema,
    onSubmit,
  })

  return (
    <div className="modal" tabIndex="-1" id="addTaskModal">
      <div className="modal-dialog">
        <form className="modal-content" onSubmit={formik.handleSubmit}>
          <div className="modal-header">
            <h5 className="modal-title">Add task</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              ref={closeBtnRef}
            ></button>
          </div>
          <div class="modal-body">
            <label htmlFor="title" class="form-label">
              Title
            </label>
            <input
              type="text"
              class={`form-control ${
                formik.touched.title && formik.errors.title ? 'is-invalid' : ''
              }`}
              id="title"
              placeholder="Task 1"
              {...formik.getFieldProps('title')}
            />
            {formik.touched.title && formik.errors.title ? (
              <div class="invalid-feedback" style={{ 'display': 'block' }}>
                {formik.errors.title}
              </div>
            ) : undefined}
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="submit" class="btn btn-primary">
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddTaskModal
