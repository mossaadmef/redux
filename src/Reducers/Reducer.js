const initialState = {
    tasks: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };