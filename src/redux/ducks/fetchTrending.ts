export const GET_FETCH_TRENDING_DATA = 'get_fetch_trending_data';
const SET_FETCH_TRENDING_DATA = 'set_fetch_trending_data';

export const getDataFetchTrending = (props: any) => ({
  type: GET_FETCH_TRENDING_DATA,
  props,
});

/**
 * @param  {any} payload
 */
export const setDataFetchTrending = (payload: any) => ({
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
