import { GET_TASKS } from "../actions/types";

const initialState = {
  tasks: []
};

export default (state = initialState, { type, data }) => {
  switch (type) {
    case GET_TASKS: {
      return {
        ...state,
        tasks: data
      };
    }
    default:
      return state;
  }
};
