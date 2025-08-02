import PropTypes from 'prop-types';
import { useEffect, useState } from "react";

const initialForm = {
  id: null,
  name: "",
  constellation: "",
};

const CrudForm = ({
  createData = () => null, updateData = () => null, dataToEdit = null, eventEdit = () => null
}) => {
  const [ form, setForm ] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [ dataToEdit ]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [ e.target.name ]: e.target.value,
    });
  };

  const handleReset = () => {
    setForm(initialForm);
    eventEdit(null); // Resetear el ID del objeto a eliminar
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.constellation) {
      alert("Datos incompletos");

      return;
    }
    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  return (
    <div className="CrudForm" >
      <h3>{ !dataToEdit ? "Agregar" : "Editar" }</h3>
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          name="name"
          onChange={ handleChange }
          value={ form.name }
          placeholder="Nombre"
        />
        <input
          type="text"
          name="constellation"
          onChange={ handleChange }
          value={ form.constellation }
          placeholder="Constelación"
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Reset" onClick={ handleReset } />
      </form>
    </div>
  );
};

CrudForm.propTypes = {
  createData: PropTypes.func,
  updateData: PropTypes.func,
  dataToEdit: PropTypes.object,
  eventEdit: PropTypes.func,
};

export default CrudForm;
