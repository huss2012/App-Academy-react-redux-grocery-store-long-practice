import { useState, useEffect } from 'react';
import { removeFromCart, increaseCount, decreaseCount, inputCount } from '../../store/cart';
import { useDispatch } from 'react-redux';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  const handelCountChange = (e) => {
    const newCount = parseInt(e.target.value, 10);
    setCount(newCount);
    dispatch(inputCount(item.id, newCount));

  }
  const handelLoosFocus = (e) => {
    if (count === 0) dispatch(removeFromCart(item.id));
  }

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
          onChange={handelCountChange}
          onBlur={handelLoosFocus}
        />
        <button
          className="cart-item-button"
          onClick={() => dispatch(increaseCount(item.id))}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={() => dispatch(decreaseCount(item.id))}
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
