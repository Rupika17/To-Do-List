import { createStore } from 'redux';

const initialState = {
  todos: [
    { id: 1, title: 'Learn React', description: 'Complete the React tutorial', completed: false },
    { id: 2, title: 'Walk the dog', description: 'Take the dog for a walk in the park', completed: false }
  ]
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.description,
        completed: false
      };
      return {
        todos: [newTodo, ...state.todos]
      };
    case 'TOGGLE_TODO':
      const updatedTodos = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

      const completedTodos = updatedTodos.filter(todo => todo.completed);
      const incompletedTodos = updatedTodos.filter(todo => !todo.completed);

      return {
        todos: [...incompletedTodos, ...completedTodos]
      };
    default:
      return state;
  }
};

const store = createStore(todoReducer);

export default store;
