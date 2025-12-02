import { instance } from '../../shared/api/axiosInstance';

export const Orders = async () => {
  const response = await instance.get('/api/orders');

  return { orders: response.data, error: null };
};