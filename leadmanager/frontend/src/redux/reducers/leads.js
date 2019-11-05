import {
  ADD_LEAD,
  GET_LEADS,
  DELETE_LEAD,
} from '../actions/types';

const initialState = {
  leads: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LEADS:
      return {
        ...state,
        leads: action.payload,
      };
    case ADD_LEAD:
      return {
        ...state,
        leads: state.leads.concat(action.payload),
      };
    case DELETE_LEAD: {
      return {
        ...state,
        leads: state.leads.filter(lead => lead.id !== action.payload),
      };
    }
    default:
      return state;
  }
}
