import React from "react";
import CartInfo from "../../components/CartInfo/CartInfo";
import Cart from "../../types/Cart";

interface CartProps {
    isCartVisible: boolean;
    closeCart(event: any): void
    cart: Cart;
}

/**
 * Header Container
 * @extends {Component<Props>}
 */
 class CartModal extends React.Component<CartProps, {}> {   
    /**
     * Renders the container.
     * @return {string} - HTML markup for the container
     */
    render() {
        return (
            <CartInfo handleClose={this.props.closeCart} open={this.props.isCartVisible} cart={this.props.cart} />
        )
    }
}
 
export default CartModal;