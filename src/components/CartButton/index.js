import { styled } from "@mui/material";
import { Link } from "react-router-dom";

const CartButton = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  fontFamily: theme.typography.fontFamily,
  color: "white", // I haven't added extra colors to theme, will ignore for test
  backgroundColor: theme.palette.primary.dark,
  padding: theme.spacing(1, 3),
  borderRadius: theme.shape.borderRadius,
}));

export default CartButton;
