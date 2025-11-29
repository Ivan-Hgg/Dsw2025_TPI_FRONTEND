import { instance } from '../../shared/api/axiosInstance';

export const Products = async () => {
  const response = await instance.get('/api/Products');

  return { products: response.data, error: null };
};