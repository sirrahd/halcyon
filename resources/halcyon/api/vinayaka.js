import axios from 'axios';
import { VINAYAKA_ENDPOINT } from '../constants';

export default () => axios.create({
  baseURL: `${VINAYAKA_ENDPOINT}`,

  transformResponse: [(data) => {
    try {
      return JSON.parse(data);
    } catch (Exception) {
      return data;
    }
  }],
});
