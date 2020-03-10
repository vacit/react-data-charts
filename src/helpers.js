import { data } from './data';
const url = 'http://localhost:3000/hotels/';

const DATA_URL = fields => {
  return `${url}?fields=${fields}`;
};

export const getData =  fields => {
  // const response = await fetch(DATA_URL(fields));
  // return
  return data;
};
