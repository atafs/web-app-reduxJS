let nextTodoId = 0
export const addTodo = (text) => {
  console.log("[DEBUG] actions, addTodo, text:", text)
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  console.log("[DEBUG] actions, setVisibilityFilter, filter:", filter)
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
