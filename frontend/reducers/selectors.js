export const getAllTodos = ({ todos }) => (
  Object.keys(todos).map(id => todos[id])
);

export const getFilteredTodos = ({ todos, filter }) => {
  let result = [];
  for (let id in todos) {
    if (todos[id].done === filter) {
      result.push(todos[id]);
    }
  }
  return result;
};