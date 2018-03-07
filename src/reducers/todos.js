const todos = (state = [], action) => {
  let { type, id, text } = action;
  switch (type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          completed: false,
          id,
          text
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(
        todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todos;
