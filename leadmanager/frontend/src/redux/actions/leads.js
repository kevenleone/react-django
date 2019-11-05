import axios from 'axios';

import { ADD_LEAD, GET_LEADS, DELETE_LEAD } from './types';

export const getLeads = () => (dispatch) => {
  axios.get('/api/leads/').then((response) => {
    dispatch({
      type: GET_LEADS,
      payload: response.data,
    });
  }).catch((e) => {
    console.log(e);
  });
};

export const addLead = data => (dispatch) => {
  axios.post('/api/leads/', data).then((response) => {
    dispatch({
      type: ADD_LEAD,
      payload: response.data,
    });
  }).catch((e) => {
    console.log(e);
  });
};

export const deleteLead = id => (dispatch) => {
  axios.delete(`/api/leads/${id}/`).then((response) => {
    dispatch({
      type: DELETE_LEAD,
      payload: id,
    });
  }).catch((e) => {
    console.log(e);
  });
};
