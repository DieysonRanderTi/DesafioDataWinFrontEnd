const proxy = [
    {
      context: '/api',
      target: 'https://localhost:44397',
      pathRewrite: {'^/api' : ''}
    }
  ];

  module.exports = proxy;