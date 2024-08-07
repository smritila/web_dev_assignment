import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from "@mui/material";

const createData = (name, orderNo, amount, status) => ({
  name,
  orderNo,
  amount,
  status,
});

const rows = [
  createData("Cupcake", 305, 3.7, "Delivered"),
  createData("Donut", 452, 25.0, "Pending"),
  createData("Eclair", 262, 16.0, "Delivered"),
  createData("Gingerbread", 356, 3.7, "Cancelled"),
  createData("Jelly Bean", 150, 0.0, "Pending"),
  createData("Lollipop", 467, 39.0, "Delivered"),
  createData("Honeycomb", 408, 3.2, "Pending"),
  // createData("Ice Cream", 237, 9.0, "Delivered"),
  // createData("Pie", 452, 18.5, "Cancelled"),
  // createData("Brownie", 418, 22.0, "Pending"),
  // createData("Cheesecake", 340, 18.0, "Delivered"),
];
const OrderTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell align="right">Order No.</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.orderNo}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">
                <Chip
                  label={row.status}
                  color={row.status === "Delivered" ? "success" : "primary"}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
