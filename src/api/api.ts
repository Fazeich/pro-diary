import axios from 'axios';
import { IApiParams } from './types';

export const request = async <T>({ url, method = 'get', data, params }: IApiParams) => {
  return await axios<T>({
    url,
    method,
    data,
    params,
    baseURL: 'http://localhost:3010',
  });
};
