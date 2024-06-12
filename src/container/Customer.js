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
    name: "Kishore",
    email: "kishore@gmail.com",    
    Contact: "8797789860",
    City: "karur",
  },
  {
    name: "naveen",
    email: "naveen@gmail.com",    
    Contact: "7986056670",
    City: "Erode",
  },
  {
    name: "praveen",
    email: "praveen@gmail.com",    
    Contact: "7898606645",
    City: "salem",
  },
  {
    name: "neeraj",
    email: "neeraj@gmail.com",    
    Contact: "606645121",
    City: "Chennai",
  },
  {
    name: "Kavin",
    email: "Kavin@gmail.com",    
    Contact: "6789860664",
    City: "madurai",
  },
  {
    name: "Ram",
    email: "Ram@gmail.com",    
    Contact: "7890664523",
    City: "trichy",
  },
  {
    name: "Subash",
    email: "Subash@gmail.com",    
    Contact: "890664590",
    City: "karur",
  }
];

function Customer() {
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
              <StyledTableCell>customer Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Contact</StyledTableCell>
              <StyledTableCell align="center">City</StyledTableCell>              
            </TableRow>
          </TableHead>
          <TableBody>
            {state.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.email}</StyledTableCell>
                <StyledTableCell align="center">{row.Contact}</StyledTableCell>
                <StyledTableCell align="center">{row.City}</StyledTableCell>                
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Customer;
