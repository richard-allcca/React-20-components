import PropTypes from 'prop-types';

const CrudTableRow = ({ 
  el, eventEdit, deleteData 
}) => {
  // console.log(eventEdit);
  const { id, name, constellation } = el;

  return (
    <tr>
      <td>{ name }</td>
      <td>{ constellation }</td>
      <td>
        <button className="edit-button" onClick={ () => eventEdit(el) }>editar </button>
        <button className="delete-button" onClick={ () => deleteData(id) }>eliminar</button>
      </td>
    </tr>
  );
};

CrudTableRow.propTypes = {
  el: PropTypes.object.isRequired,
  eventEdit: PropTypes.func.isRequired,
  deleteData: PropTypes.func.isRequired,
};

export default CrudTableRow;
