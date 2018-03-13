export const CLIENT_ID = process.env.CLIENT_ID;
export const CLIENT_SECRET = process.env.CLIENT_SECRET;
export const PORT = process.env.PORT;
export const HORIZON_URL = process.env.NODE_ENV === 'dev' ? 'https://horizon-testnet.stellar.org' : 'https://horizon.stellar.org';