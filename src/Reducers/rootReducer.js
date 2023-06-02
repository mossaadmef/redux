import { ADD_TODO, EDIT_TODO, FILTER_TODO, DELETE_TODO } from "../JS/Constants/actions-types";

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

      case FILTER_TODO:
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };

      case EDIT_TODO:
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };

      case DELETE_TODO:
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };

    }};

   export default rootReducer ;