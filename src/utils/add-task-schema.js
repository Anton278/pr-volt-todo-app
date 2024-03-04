import { object, string } from 'yup'

export const addTaskSchema = object({
  'title': string()
    .required('Field required')
    .max(
      process.env.REACT_APP_TASK_TITLE_MAX_LENGTH,
      'Max length 50 characters',
    ),
})
