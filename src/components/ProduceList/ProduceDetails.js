import { addToCart } from "../../store/cart";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { likeUnlike } from '../../store/produce';


function ProduceDetails({ produce }) {
  const cartItem = {};
  const dispatch = useDispatch();


  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          onClick={() => dispatch(likeUnlike(produce.id, !produce.liked))}
          className={"like-button" + (produce.liked ? " selected" : "")}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={() => dispatch(addToCart(produce.id))}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
