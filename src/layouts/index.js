import { Container } from "@mui/material";
import { HeaderSpace, Navbar } from "../components";

function BaseLayout(props) {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <HeaderSpace />
      {props.children}
    </Container>
  );
}

export default BaseLayout;
