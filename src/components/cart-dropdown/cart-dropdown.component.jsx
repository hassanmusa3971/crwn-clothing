import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import CustomButton from "../custom-button/custom-button.component";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.style.scss";

const CartDropdown = ({ cartItems, toggleCartHidden }) => {
  let navigatePage = useNavigate();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={() => {
        navigatePage("/Checkout");
        toggleCartHidden();
        }}>
        Checkout
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch)=>({
  toggleCartHidden: ()=> dispatch(toggleCartHidden())

});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
