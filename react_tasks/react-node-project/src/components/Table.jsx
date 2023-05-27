import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Link } from "react-router-dom";

const CustomTable = ({ state }) => {
  return (
    <Table className="table mt-3">
      <TableHead>
        <TableRow className="bg-light">
          <TableCell className="text-dark">Title</TableCell>
          <TableCell className="text-dark">Description</TableCell>
          <TableCell className="text-dark">Category</TableCell>
          <TableCell className="text-dark">Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {state?.data.users.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.title}</TableCell>
            <TableCell>{row.description}</TableCell>
            <TableCell>{row.category}</TableCell>
            <TableCell>
              <DeleteIcon />
              <Link to={`/Editform`}>
                <EditIcon />
              </Link>
              <Link to={`/Listform`}>
                <VisibilityIcon />
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CustomTable;
