/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { helperAxios } from './path/to/helperAxios';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [responsePost, setResponsePost] = useState(null);
  const [responsePut, setResponsePut] = useState(null);
  const [responseDelete, setResponseDelete] = useState(null);

  const { GET, POST, PUT, DELETE } = helperAxios();

  // Example for GET
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await GET('/api/data', 'https://api.example.com');
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Example for POST
  const handleSubmit = async () => {
    const body = { name: 'John Doe', age: 30 };
    try {
      const result = await POST('/api/users', body, 'https://api.example.com');
      setResponsePost(result);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  // Example for PUT
  const handleUpdate = async () => {
    const body = { name: 'Jane Doe', age: 25 };
    try {
      const result = await PUT('/api/users', 1, body, 'https://api.example.com');
      setResponsePut(result);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  // Example for DELETE
  const handleDelete = async () => {
    const body = { reason: 'No longer needed' };
    try {
      const result = await DELETE('/api/users', 1, body, 'https://api.example.com');
      setResponseDelete(result);
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>

      <h3>Responses:</h3>
      {responsePost && <pre>{JSON.stringify(responsePost, null, 2)}</pre>}
      {responsePut && <pre>{JSON.stringify(responsePut, null, 2)}</pre>}
      {responseDelete && <pre>{JSON.stringify(responseDelete, null, 2)}</pre>}

      <h3>Data:</h3>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default MyComponent;
