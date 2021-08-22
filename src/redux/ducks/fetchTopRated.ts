export const GET_FETCH_TOP_RATED = 'get_fetch_top_rated_data';
const SET_FETCH_TOP_RATED = 'set_fetch_top_rated_data';

export const getDataFetchTopRated = (props: any) => ({
  type: GET_FETCH_TOP_RATED,
  props,
});

/**
 * @param  {any} payload
 */
export const setDataFetchTopRated = (payload: any) => ({
  type: SET_FETCH_TOP_RATED,
  payload,
});

const initialState = {
  page: undefined,
  results: [],
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case SET_FETCH_TOP_RATED: {
      const { payload } = action;
      return { ...state, payload };
    }
    default: {
      return state;
    }
  }
};
