import { GET_TASKS } from "./types";

export const getTasks = data => {
  return { type: GET_TASKS, data };
};
