export const RECIEVE_TODO = 'RECIEVE_TODO';
export const RECIEVE_TODOS = 'RECIEVE_TODOS';

export function recieveTodo(todo) {
  return { type: RECIEVE_TODO, todo };
}

export function recieveTodos(todos) {
  return {type: RECIEVE_TODOS,todos};
}
