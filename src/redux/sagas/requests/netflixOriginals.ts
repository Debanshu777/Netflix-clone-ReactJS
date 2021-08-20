import axios from '../../../services/baseAxios';

export default function requestGetData(props: any) {
  return axios.get(props.requestURL);
}
