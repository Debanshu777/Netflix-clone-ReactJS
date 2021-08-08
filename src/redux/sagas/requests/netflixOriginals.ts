import axios from '../../../services/baseAxios';
import requests from '../../../services/requests';

export function requestGetData() {
  return axios.get(requests.fetchNetflixOriginals);
}
