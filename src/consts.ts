export const SLACK_API_TOKEN = process.env.SLACK_API_TOKEN;
export const HORIZON_URL = process.env.NODE_ENV === 'dev' ? 'https://horizon-testnet.stellar.org' : 'https://horizon.stellar.org';