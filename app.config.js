import 'dotenv/config';
import appJson from './app.json';

export default ({ config }) => ({
  ...appJson,
  expo: {
    ...appJson.expo,
    extra: {
      apiUrl: process.env.API_URL || 'http://localhost:3000',
    },
  },
});
