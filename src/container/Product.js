import { Link, NavLink } from "react-router-dom";
import { Stack, Button } from "@mui/material";

function Product() {
  return (
    <div>
      <Stack row sx={{ flexDirection: "row-reverse" }}>
        <Stack sx={{margin:'6px'}}>
          <Button variant="outlined">
            <Link to={":prodid"}>Addproduct</Link>
          </Button>
        </Stack>
      </Stack>
    </div>
  );
}

export default Product;
