import { getTasks } from "../actions";

export const getTasksThunk = (page, limit) => {
  return async dispatch => {
    try {
      const response = await api.getTasks(page, limit);
      console.log(response.data);
      dispatch(getTasks(response.data));
    } catch (e) {
      console.error(e);
    }
  };
};
