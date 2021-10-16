import Cart from "../types/Cart";
import LineItem from "../types/LineItem";

class SessionStorageHelper {
    static getCart() : Cart {
        var cart: Cart = new Cart();
        cart.lineItems= [] as unknown as [LineItem];
        var cartJSON = sessionStorage.getItem("cart");

        console.log(cartJSON);

        if (cartJSON != null) {
            const object = JSON.parse(cartJSON);
            cart.lineItems = object.lineItems;
        }

        return cart;
    }

    static updateCart(cart: Cart): void {
        sessionStorage.setItem("cart", JSON.stringify(cart));
    }    
}

export default SessionStorageHelper;