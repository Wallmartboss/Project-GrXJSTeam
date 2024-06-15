import axios from 'axios';

export async function postData(arr) {
  const BASE_URL = 'https://portfolio-js.b.goit.study';
  const END_POINT = '/api/requests';
  const url = `${BASE_URL}${END_POINT}`;
  const res = await axios.post(url, arr);
  return res;
}
