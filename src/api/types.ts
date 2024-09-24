export interface IApiParams {
  url: string;
  method?: 'get' | 'patch' | 'put' | 'post' | 'delete';
  data?: any;
  params?: any;
}
