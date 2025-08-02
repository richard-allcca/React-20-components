import { useEffect, useState } from 'react';
import { helperHttp } from '../../../helpers/helperHttp';
import Loader from '../../../shared/Loader';
import Message from '../../../shared/Message';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import './CrudApi.css'; // Assuming you have a CSS file for styling

const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const api = helperHttp();
  const url = "http://localhost:3000/santos";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const fetchData = await api.get(url);
      if (!fetchData.err) {
        setDb(fetchData);
        setError(null);
      } else {
        setDb(null);
        setError(fetchData);
      }
      setLoading(false);
    };

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // POST
  const createData = async (data) => {
    data.id = Date.now();

    const options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    const postData = await api.post(url, options);
    if (!postData.err) {
      setDb(db ? [...db, postData] : [postData]);
    } else {
      setError(postData);
    }
  };

  // PUT
  const updateData = async (newElement) => {
    const endpoint = `${url}/${newElement.id}`;
    const options = {
      body: newElement,
      headers: { "content-type": "application/json" },
    };

    const putData = await api.put(endpoint, options);
    if (!putData.err) {
      const newData = db.map((el) => (el.id === newElement.id ? newElement : el));
      setDb(newData);
    } else {
      setError(putData);
    }
  };

  // DELETE
  const deleteData = async (id) => {
    const isDelete = window.confirm(`¿Estas seguro de Eliminar el ID ${id}?`);

    if (isDelete) {
      const endpoint = `${url}/${id}`;
      const options = {
        headers: { "content-type": "application/json" },
      };
      const delData = await api.del(endpoint, options);
      if (!delData.err) {
        const newData = db.filter((el) => el.id !== id);
        setDb(newData);
      } else {
        setError(delData);
      }
    }
  };

  return (
    < div className="CrudApi" >
      <h2>CRUD API</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          eventEdit={setDataToEdit}
        />
        {loading && <Loader />}
        {error && (
          <Message
            bgColor="#dc3545"
            msg={`Error ${error.status}: ${error.statusText}`}
          />
        )}
        {db && (
          <CrudTable
            data={db}
            eventEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </article>
    </div>
  );
};

export default CrudApi;