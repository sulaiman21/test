import { AppBar, Toolbar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import CartButton from "../CartButton";

function Navbar() {
  const { items = [] } = useSelector((state) => state.carts);
  const cartItemsCount = items.reduce(
    (pre, curr) => parseInt(pre || 0) + parseInt(curr.count),
    0
  );
  return (
    <AppBar position="fixed" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography>Test for Softoo</Typography>
        <CartButton to="/carts">Cart Items ( {cartItemsCount} )</CartButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
