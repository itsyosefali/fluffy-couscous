import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const fakeData = [
  {
    name: "Fake Name 1",
    email: "fake1@example.com",
    subject: "Fake Subject 1",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Fake Name 2",
    email: "fake2@example.com",
    subject: "Fake Subject 2",
    message: "Sed dictum metus non venenatis interdum.",
  },
];

const CustomerTable = () => {
  return (
    <TableContainer component={Paper} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Message</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fakeData.map((data, index) => (
              <TableRow key={index}>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.email}</TableCell>
                <TableCell>{data.subject}</TableCell>
                <TableCell>{data.message}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </TableContainer>
  );
};

export default CustomerTable;