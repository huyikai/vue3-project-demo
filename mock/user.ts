// mock/user.ts
export default [
  // 用户登录
  {
    url: '/api/user/login',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: {
          token: 'Token'
        }
      };
    }
  }
];
