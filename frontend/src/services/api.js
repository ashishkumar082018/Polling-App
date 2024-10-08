import axios from 'axios';

const host = 'http://localhost:4000/api';

export const setToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const call = async (method, path, data) => {
  try {
    const response = await axios({
      method,
      url: `${host}/${path}`,
      data,
    });
    return response.data;
  } catch (error) {
    console.error('API call error:', error.message || error);
    throw error;
  }
};

export default { setToken, call };
