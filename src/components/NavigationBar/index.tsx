import "./index.css";
import {
  Typography,
  AppBar,
  Box,
  Toolbar,
  IconButton
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import Cart from "../../types/Cart";

interface NavBarProps {
  handleClickCart(event: any): void
  cart: Cart
}

/**
 * navigation bar elements
 * @returns NavigationBar UI elements
 */
const NavigationBar: React.FC<NavBarProps> = (props) => {
  
  var numberOfItems = 0;
  if (props.cart !== undefined && props.cart.lineItems !== undefined) {
    numberOfItems = props.cart.getNumberOfItems();
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="navbar" position="static">
        <Toolbar variant="dense">
          <Box display='flex' flexGrow={1}>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <Link className="product-list-link" to="/">
              <Typography variant="h6" color="inherit" component="div">
                Chambasoft Store
              </Typography>
            </Link>
          </Box>
          <Typography className="cart-number">Elementos en carrito: {numberOfItems}</Typography>
          <IconButton>
            <ShoppingCartIcon onClick={props.handleClickCart} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;
