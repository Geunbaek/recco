const cron = require('node-cron');
const axios = require('axios');

cron.schedule('*/2 * * * *', () => {
  axios.post(`https://peaceful-spire-08369.herokuapp.com/search/category`, {
    requestPage: 1,
    maxItemCountByPage: 5,
    largeCategory: '스킨케어',
    smallCategory: '크림',
    sort: 'id desc',
  });
});

module.exports = {
  env: {
    // BASE_URL: 'http://localhost:8000',
    // BASE_URL: 'http://www.recco.n-e.kr/api',
    BASE_URL: 'https://peaceful-spire-08369.herokuapp.com',
  },
  images: {
    domains: ['dn5hzapyfrpio.cloudfront.net'],
  },
  reactStrictMode: true,
};
