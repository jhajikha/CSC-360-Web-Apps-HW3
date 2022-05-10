function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER":
        return action.username;
    case "LOGOUT":
        return "";
    default:
        return state;
    }
  }
  
  function todoReducer(state, action) {
    switch (action.type) {
    case "CREATE_TODO":
    const newTodo = {
      title: action.title,
      content: action.content,
      dateCreated: action.dateCreated, 
      dateCompleted: action.dateCompleted, 
      complete:action.complete,
      index:action.index         
    };

    return [newTodo, ...state];

    case "TOGGLE_TODO":
      state[action.index]= {
        title: action.title,
        content: action.content,
        dateCreated: action.dateCreated, 
        dateCompleted: action.dateCompleted, 
        complete:action.complete,
        index:action.index
      };
      return state;
    default:
    return state;
    }
  }

export default function appReducer(state,action){
  return {
      user:userReducer(state.user,action),
      todos:todoReducer(state.todos,action)
  }
}