import axios from 'axios';

export const helperAxios = () => {
  const createApiInstance = (baseURL) => {
    const token = localStorage.getItem('token');

    return axios.create({
      baseURL: baseURL || "http://localhost:5000",
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }),
      },
    });
  };

  const handleResponse = (response) => response.data;

  const handleError = (error) => {
    // eslint-disable-next-line no-console
    console.error(error);

    return {
      error: true,
      status: error.response?.status || "00",
      statusText: error.response?.statusText || "Ocurrió un Error",
    };
  };

  const GET = async (path, baseURL) => {
    try {
      const api = createApiInstance(baseURL);
      const res = await api.get(path);

      return handleResponse(res);
    } catch (error) {
      return handleError(error);
    }
  };

  const POST = async (path, body = {}, baseURL) => {
    try {
      const api = createApiInstance(baseURL);
      const res = await api.post(path, body);
      localStorage.setItem("token", res.data.token);

      return handleResponse(res);
    } catch (error) {
      return handleError(error);
    }
  };

  const PUT = async (path, id, body = {}, baseURL) => {
    try {
      const api = createApiInstance(baseURL);
      const res = await api.put(`/${path}/${id}`, body);

      return handleResponse(res);
    } catch (error) {
      return handleError(error);
    }
  };

  const DELETE = async (path, id, body = {}, baseURL) => {
    try {
      const api = createApiInstance(baseURL);
      const res = await api.delete(`/${path}/${id}`, { data: body });

      return handleResponse(res);
    } catch (error) {
      return handleError(error);
    }
  };

  return {
    GET,
    POST,
    PUT,
    DELETE,
  };
};
