import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

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

//-------------hard-code--------------//
const state = [
  {
    name: "tamilnadu",
    capital: "chennai",
    ipl: "csk",
    captain: "msd",
    trophies: "5",
  },
  {
    name: "karanataka",
    capital: "bangalore",
    ipl: "rcb",
    captain: "kholi",
    trophies: "5",
  },
  {
    name: "maharashtra",
    capital: "mumbai",
    ipl: "mi",
    captain: "rohit",
    trophies: "0",
  },
];

function Customer() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setdata(res))
      .catch((err) => console.error(err));
  });
  console.log(data, "data");
  return (
    <div>
      <Stack row sx={{ flexDirection: "row-reverse" }}>
        <Stack sx={{margin:'6px'}}>
          <Button variant="outlined">
            <Link id="link-customer-page" to={":customid"}>
              Add customer
            </Link>
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
              {/* <StyledTableCell align="right">Trophies</StyledTableCell> */}
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
                {/* <StyledTableCell align="right">{row.trophies}</StyledTableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Customer;
