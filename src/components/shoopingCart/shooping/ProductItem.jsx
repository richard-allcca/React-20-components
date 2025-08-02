
const ProductItem = ({ data, addToCart }) => {
  const { id, name, price } = data;
  return (
    <div style={ { border: "1px solid gray", padding: "1rem" } } className="product-item" >
      <h4>{ name }</h4>
      <h5>{ price }</h5>
      <button className='btn' onClick={ () => addToCart(id) } >Agregar</button>
    </div>
  );
};

export default ProductItem;