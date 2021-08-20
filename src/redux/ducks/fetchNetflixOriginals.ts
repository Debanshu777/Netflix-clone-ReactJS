export const GET_NETFLIX_ORIGINAL_DATA = 'get_data';
const SET_NETFLIX_ORIGINAL_DATA = 'set_data';

/**
 * @param  {GET_NETFLIX_ORIGINAL_DATA} =>({type
 * @param  {} }
 */
export const getData = (props: any) => ({
  type: GET_NETFLIX_ORIGINAL_DATA,
  props,
});

/**
 * @param  {any} payload
 */
export const setData = (payload: any) => ({
  type: SET_NETFLIX_ORIGINAL_DATA,
  payload,
});

const initialState = {
  page: undefined,
  results: [],
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case SET_NETFLIX_ORIGINAL_DATA: {
      const { payload } = action;
      return { ...state, payload };
    }
    default: {
      return state;
    }
  }
};
