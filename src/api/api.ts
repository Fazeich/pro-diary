import axios from 'axios';
import { IApiParams } from './types';
import { createEffect } from 'effector';

export const request = <T>({ url, method = 'get', data, params }: IApiParams) => {
  return axios<T>({
    url,
    method,
    data,
    params,
    headers: {
      'Content-Type': 'appliation/json',
    },
    // baseURL: 'http://localhost:3010',
  });
};
