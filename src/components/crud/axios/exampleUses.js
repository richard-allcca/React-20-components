/* eslint-disable no-console */
// Example GET
import { helperAxios } from './../../../helpers/helperAxios';

const { GET } = helperAxios();

const fetchData = async () => {
  const data = await GET('/api/data', 'https://api.example.com');
  console.log(data);
};

fetchData();

// Example POST

const { POST } = helperAxios();

const postData = async () => {
  const body = { name: 'John Doe', age: 30 };
  const data = await POST('/api/users', body, 'https://api.example.com');
  console.log(data);
};

postData();

// Example PUT

const { PUT } = helperAxios();

const updateData = async () => {
  const body = { name: 'Jane Doe', age: 25 };
  const data = await PUT('/api/users', 1, body, 'https://api.example.com');
  console.log(data);
};

updateData();

// Example DELETE

const { DELETE } = helperAxios();

const deleteData = async () => {
  const body = { reason: 'No longer needed' };
  const data = await DELETE('/api/users', 1, body, 'https://api.example.com');
  console.log(data);
};

deleteData();
