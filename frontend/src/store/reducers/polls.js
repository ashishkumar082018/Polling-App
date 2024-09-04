import { SET_POLLS, SET_CURRENT_POLL } from "../actionTypes";

const DEFAULT_POLLS_STATE = [];
const DEFAULT_CURRENT_POLL_STATE = {};

export const polls = (state = DEFAULT_POLLS_STATE, action) => {
  switch (action.type) {
    case SET_POLLS:
      return action.polls;
    default:
      return state;
  }
};

export const currentPoll = (state = DEFAULT_CURRENT_POLL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_POLL:
      return action.poll;
    default:
      return state;
  }
};
