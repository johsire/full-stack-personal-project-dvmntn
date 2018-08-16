import axios from 'axios';
import { createAction } from 'redux-actions';

/**
 * Performs a request with `get` http method.
 */
export const performGet = async (
  dispatch,
  url,
  requestOptions,
  body,
  actionBase,
) => {
  const startAction = createAction(`${actionBase}:GET_START`);
  const successAction = createAction(`${actionBase}:GET_SUCCESS`);
  const errorAction = createAction(`${actionBase}:GET_ERROR`);

  dispatch(startAction());
  try {
    const res = await axios.get(url, body, {
      ...requestOptions,
      // withCredentials: true,
      // headers: { 'Access-Token': getToken('ACCESS_TOKEN') },
    });
    // console.log(res.data, 'IN GET HELPER');
    dispatch(successAction(res.data));
  } catch (e) {
    dispatch(errorAction(e));
  }
};

/**
 * Performs a request with `post` http method.
 */
export const performPost = async (
  dispatch,
  url,
  requestOptions,
  body,
  actionBase,
) => {
  const startAction = createAction(`${actionBase}:POST_START`);
  const successAction = createAction(`${actionBase}:POST_SUCCESS`);
  const errorAction = createAction(`${actionBase}:POST_ERROR`);

  dispatch(startAction());
  try {
    const res = await axios.post(url, body, {
      ...requestOptions,
      withCredentials: true,
      // headers: { 'Access-Token': getToken('ACCESS_TOKEN') },
    });
    dispatch(successAction(res.data));
  } catch (e) {
    dispatch(errorAction(e));
  }
};

/**
 * Performs a request with `put` http method.
 */
export const performPut = async (
  dispatch,
  url,
  requestOptions,
  body,
  actionBase,
) => {
  const startAction = createAction(`${actionBase}:PUT_START`);
  const successAction = createAction(`${actionBase}:PUT_SUCCESS`);
  const errorAction = createAction(`${actionBase}:PUT_ERROR`);
  dispatch(startAction());
  try {
    const res = await axios.put(url, body, {
      ...requestOptions,
      withCredentials: true,
      // headers: { 'Access-Token': getToken('ACCESS_TOKEN') },
    });
    dispatch(successAction(res.data));
  } catch (e) {
    dispatch(errorAction(e));
  }
};

/**
 * Performs a request with `get` http method.
 */
export const performParamsGet = async (
  dispatch,
  data,
  actionBase,
) => {
  const startAction = createAction(`${actionBase}:GET_START`);
  const successAction = createAction(`${actionBase}:GET_SUCCESS`);
  const errorAction = createAction(`${actionBase}:GET_ERROR`);

  dispatch(startAction());
  try {
    dispatch(successAction(data));
  } catch (e) {
    dispatch(errorAction(e));
  }
};

/**
 * Performs a request with `delete` http method.
 */
export const performDelete = async (
  dispatch,
  url,
  requestOptions,
  body,
  actionBase,
) => {
  const startAction = createAction(`${actionBase}:DELETE_START`);
  const successAction = createAction(`${actionBase}:DELETE_SUCCESS`);
  const errorAction = createAction(`${actionBase}:DELETE_ERROR`);
  dispatch(startAction());
  try {
    const res = await axios.delete(url, body, {
      ...requestOptions,
      withCredentials: true,
      // headers: { 'Access-Token': getToken('ACCESS_TOKEN') },
    });
    dispatch(successAction(res.data));
  } catch (e) {
    dispatch(errorAction(e));
  }
};
