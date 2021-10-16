import { Box, Button, Grid, Modal, Paper, Typography } from "@material-ui/core";
import React from "react";
import Cart from "../../types/Cart";
import "./CartInfo.css";

interface CartInfoProps {
  open: boolean;
  handleClose(event: any): void;
  cart: Cart;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CartInfo: React.FC<CartInfoProps> = (props) => {
  var lineItems = [] as any[];
  if (props.cart !== undefined && props.cart.lineItems !== undefined) {
    props.cart.lineItems.forEach((lineItem) => {
      lineItems.push(
        <React.Fragment>
          <Grid item lg={2}>
            <Paper className="largeImage">
              <img
                src={lineItem.sku.smallImageUrl}
                alt={lineItem.product.name}
              />
            </Paper>
          </Grid>
          <Grid item lg={10} container>
            <Grid item lg={7}>
              <Typography className="productName">
                {lineItem.product.name}
              </Typography>
            </Grid>
            <Grid item lg={3}>
              <Typography className="dollars">{lineItem.totalPrice}</Typography>
            </Grid>
            <Grid item lg={2}>
              <Typography>{lineItem.quantity}</Typography>
            </Grid>
          </Grid>
        </React.Fragment>
      );
    });
  }
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="productPreview">
          <Grid container className="productGrid" spacing={2}>
            {lineItems}
          </Grid>
        </div>
        <Button
          className="cartButton"
          variant="contained"
          onClick={props.handleClose}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default CartInfo;