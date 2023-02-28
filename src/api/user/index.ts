import request from '@/utils/request';
export const login = () =>
  request({
    method: 'post',
    url: '/mock/user/login'
  });
