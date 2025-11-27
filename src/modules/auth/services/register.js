import { instance } from '../../shared/api/axiosInstance';

export const register = async (
  username,
  password,
  customer = { name: '', email: '', phonenumber: '' },
  role
) => {
  const response = await instance.post('/api/auth/register', { username, password, customer, role });

  return { customerId: response.data.CustomerId, role: response.data.Role, username: response.data.UserName, error: null };
};