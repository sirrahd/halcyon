import axios from 'axios';
import LinkHeader from './linkHeader';

export const getLinks = (response) => {
  const value = response.headers.link;

  if (!value) {
    return { refs: [] };
  }

  return LinkHeader.parse(value);
};

export default getState => axios.create({
  baseURL: getState().getIn(['meta', 'host']),
  headers: {
    Authorization: `Bearer ${getState().getIn(['meta', 'access_token'], '')}`,
  },
  transformResponse: [(data) => {
    try {
      return JSON.parse(data);
    } catch (Exception) {
      return data;
    }
  }],
});