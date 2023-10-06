const dev = 'http://localhost:3000/api';
const prod = 'https://founder.saukie.net/api';

export const baseURL = process.env.NODE_ENV === 'production' ? prod : dev;
