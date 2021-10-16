import React from "react";
import NavigationBar from "../../components/NavigationBar"; 
import SessionHelper  from "../../tools/SessionStorageHelper";
import Cart from "../../types/Cart";

interface HeaderProps {
    openCart(event: any): void
    cart: Cart
}

/**
 * Header Container
 * @extends {Component<Props>}
 */
class Header extends React.Component<HeaderProps, {}> {
    /**
     * Renders the container.
     * @return {string} - HTML markup for the container
     */
    render() {
        return (
            <NavigationBar handleClickCart={this.props.openCart} cart={this.props.cart}/>
        )
    }

    componentDidMount = () => {
        this.setState({numberOfItems: SessionHelper.getCart().getNumberOfItems()})
    }
}
 
export default Header;