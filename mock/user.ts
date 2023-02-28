// mock/user.ts
export default [
  // login
  {
    url: '/mock/user/login',
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
