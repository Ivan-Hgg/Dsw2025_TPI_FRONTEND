import { instance } from '../../shared/api/axiosInstance';

export const register = async (
  username,
  password,
  name,
  email,
  tel,
  role
) => {
    let payload = {
    username,
    email, 
    password,
    role
  };
    if(role === 'CLIENTE'){
        const customer = {
          name: name,
          email: email,
          phoneNumber: tel
        };
        // Sobreescribimos el payload con la estructura para CLIENTE
        payload = {
          username,
          customer, // Incluimos el objeto customer
          password,
          role
        };
    }
  const response = await instance.post('/api/auth/register', payload);

  return { customerId: response.data.CustomerId, role: response.data.Role, username: response.data.UserName, error: null };
};