import { useContext, useState } from 'react';
import CarIcon from '../../../assets/cart-shopping-solid.svg';
import { ShopContext } from '../context/ShopContext';
import '../style/shopStyle.css';
import CartItem from './CartItem';
import ProductItem from './ProductItem';
import Total from './Total';

const ShoppingCart = () => {
  const { state, addToCart, deleteFromCart, clearCart } = useContext(ShopContext);
  const { products, cart } = state;

  const [ isOpen, setIsOpen ] = useState(false);

  const isOpenCar = (e) => {
    setIsOpen(prev => !prev);
  };

  const getProductsItems = products.map((item) => {
    return <ProductItem key={ item.id } data={ item } addToCart={ addToCart } />;
  });

  const getProductsScreen = () => {

    return (
      <div className="product-content">
      <h3>Productos</h3>
      <article className="box grid-responsive">
        { getProductsItems }
      </article>
    </div>
    );
  };

  const getCart = () => {
    if (!isOpen) return null;

    const getCartItem = cart.map((item) => {
      return <CartItem key={ item.id } data={ item } deleteFromCart={ deleteFromCart } />;
    });

    return (
      <div className="cart-content">
        <h3>Carrito</h3>
        <article className='cart-article' >
          { getCartItem }
        </article>
        <button className='btn' onClick={ clearCart } >Limpiar Carrito</button>
      </div>
    );
  };

  return (
    <div className='shopContainer'>
      <h2>Shopping Cart</h2>
      <div className="icon" onClick={ isOpenCar } >
        <img src={ CarIcon } alt="" />
      </div>

      { getProductsScreen() }

      { getCart() }

      <Total data={ cart } />

    </div>
  );
};

export default ShoppingCart;