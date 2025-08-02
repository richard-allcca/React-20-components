
const CartItem = ({ data, deleteFromCart }) => {
  const { id, name, price, quantity } = data;

  return (
    <div className="cart-item">
      <h4>
        Nombre: "{ name }" -  total: { quantity }
      </h4>

      <h5>
        Precio unidad: { price } - total: { quantity * price }
      </h5>

      <button className='btn' onClick={ () => deleteFromCart(id) } >Eliminar Uno</button>
      <br />
      <button className='btn' onClick={ () => deleteFromCart(id, true) } >Eliminar todos</button>
    </div>
  );
};

export default CartItem;