import './checkout-item.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>

      <span className='name'>{name}</span>
      <span className='quantity'>
        <button onClick={() => removeItemFromCart(cartItem)}>-</button>
        {quantity}
        <button onClick={() => addItemToCart(cartItem)}>+</button>
      </span>
      <span className='price'>{price}</span>
      <div
        className='remove-button'
        onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};
export default CheckoutItem;
