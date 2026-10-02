function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload,
          isFavorite: false,
        },
      ];

    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);

    case "TOGGLE_FAVORITE":
      return state.map((task) =>
        task.id === action.payload
          ? {
              ...task,
              isFavorite: !task.isFavorite,
            }
          : task,
      );

    default:
      return state;
  }
}

export default taskReducer;