import { Link, NavLink } from "react-router-dom";
import { Stack, Button } from "@mui/material";
import {Table,TableBody,TableHead,TableContainer,StyledTableCell} from '@mui/material'
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import {useState,useEffect} from 'react'
function Product() {

  const [data, setdata] = useState([]);

    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((res) => setdata(res))
        .catch((err) => console.error(err));
    },[]);  

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <div>
      <Stack row sx={{ flexDirection: "row-reverse" }}>
        <Stack sx={{margin:'6px'}}>
          <Button variant="outlined">
            <Link to={":prodid"}>Addproduct</Link>
          </Button>
        </Stack>
      </Stack>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="center">Title</StyledTableCell>
              <StyledTableCell align="center">Category</StyledTableCell>
              <StyledTableCell align="center">Price</StyledTableCell>             
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="center">{row.title}</StyledTableCell>
                <StyledTableCell align="center">{row.category}</StyledTableCell>
                <StyledTableCell align="center">{row.price}</StyledTableCell>                
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>     
    </div>
  );
}

export default Product;
