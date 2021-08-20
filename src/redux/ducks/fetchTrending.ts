export const GET_FETCH_TRENDING_DATA = 'get_data';
const SET_FETCH_TRENDING_DATA = 'set_data';

/**
 * @param  {GET_FETCH_TRENDING_DATA} =>({type
 * @param  {} }
 */
export const getData = () => ({
  type: GET_FETCH_TRENDING_DATA,
});

/**
 * @param  {any} payload
 */
export const setData = (payload: any) => ({
  type: SET_FETCH_TRENDING_DATA,
  payload,
});

const initialState = {
  page: undefined,
  results: [],
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case SET_FETCH_TRENDING_DATA: {
      const { payload } = action;
      return { ...state, payload };
    }
    default: {
      return state;
    }
  }
};
