import { User, Photo } from './types';

export const getUsersResponse = async () => {
  const endpoint = 'https://jsonplaceholder.typicode.com/users';
  const res = await fetch(endpoint);
  const json: User[] = await res.json();
  return json;
};

export const getPhotosResponse = async () => {
  const endpoint = 'https://jsonplaceholder.typicode.com/photos';
  const res = await fetch(endpoint);
  const json: Photo[] = await res.json();
  return json;
};
