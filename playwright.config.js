const config = {
  reporter: [['html', { open: 'always' }]],
    use: {
      headless: false,
      browserName: 'chromium',
      screenshot: 'off',
    },
};
  
module.exports = config;
  