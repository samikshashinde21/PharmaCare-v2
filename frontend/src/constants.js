export const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : '';
//otherwise empty i.e its in production

export const PROCESS_URL = '/api/products';
export const USERS_URL = '/api/users';
export const ORDERS_URL = '/api/orders';
export const PAYPAL_URL = '/api/config/paypal';