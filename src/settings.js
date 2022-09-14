export default {
  version: process.env.VUE_APP_VERSION,
  nodeEnv: process.env.NODE_ENV,
  apiBaseUrl: process.env.VUE_APP_API_BASE_URL || 'http://localhost:3001',
}
