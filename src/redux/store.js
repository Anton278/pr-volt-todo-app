import { configureStore } from '@reduxjs/toolkit'

import todos from './slices/todos/slice'

export const store = configureStore({
  'reducer': { todos },
})
