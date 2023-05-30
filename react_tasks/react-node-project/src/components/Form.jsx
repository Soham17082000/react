import React, { useState } from "react";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Grid,
  TextField,
  TextareaAutosize,
  Select,
  MenuItem,
} from "@mui/material";
import { Button } from "@mui/material";
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
import { PostApiData, FetchApiData,UpdateApiData,deleteapidata } from "../redux/actions/apiActions";
import { useSelector, useDispatch } from "react-redux";

function Form() {
  const dispatch = useDispatch();
  

  const state = useSelector((state) => state.FETCH_DATA);

  console.log("state insert", state);

  const [category, setCategory] = useState("");
  const [showTable, setShowTable] = useState(false);
  const handleClick = () => {
    dispatch(FetchApiData());
    setShowTable(true);
  };

  const [data, setdata] = useState({
    title: "",
    description: "",
    category: "",
  });

//   showAlert = () => {
//     Swal.fire({
//         title: "Success",
//         text: "Alert successful",
//         icon: "success",
//         confirmButtonText: "OK",
//       });
// }


  function onchange(e) {
    setdata({ ...data, [e.target.name]: e.target.value });

    console.log(data);
  }
const showAlert = () => {
  Swal.fire({
      title: "Success",
      text: "Delete successful",
      icon: "success",
      confirmButtonText: "OK",
    });
}

const postAlert=()=>{
  Swal.fire({
    title: "Success",
    text: "Data Added successful",
    icon: "success",
    confirmButtonText: "OK",
  })
}
  return (
    <>
    <div className="container-fluid mt-2">
          <h2 className="align-item-center text-success">Form</h2>
        
          </div>
      <form className="bg-light">

        <Grid container spacing={1} className="mt-3 p-3">
          <Grid item lg={12} md={12} sm={12}>
            <TextField
              label="Title"
              name="title"
              value={data.title}
              className="form-control"
              color="primary"
              variant="outlined"
              type="text"
              onChange={onchange}
            />
          </Grid>
          <Grid item lg={12} md={12} sm={12}>
            <TextareaAutosize
              label="Description"
              name="description"
              value={data.description}
              className="form-control"
              color="primary"
              variant="outlined"
              minRows={3}
              placeholder="Enter description"
              onChange={onchange}
            />
          </Grid>

          <Grid className="ms-2">
            <h6>category</h6>
          </Grid>

          <Grid item lg={12} md={12} sm={12}>
            <Select
              label="Category"
              name="category"
              className="form-control"
              color="primary"
              variant="outlined"
              value={data.category}
              onChange={onchange}
            >
              <MenuItem value="" disabled>
                Select a category
              </MenuItem>
              <MenuItem value="category1">Category 1</MenuItem>
              <MenuItem value="category2">Category 2</MenuItem>
              <MenuItem value="category3">Category 3</MenuItem>
            </Select>
          </Grid>
        </Grid>

        <Grid container spacing={1} className="mt-3 p-3">
          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            className="d-flex justify-content-center"
          >
            <Button
              variant="contained"
              color="success"
              type="button"
              onClick={() => {postAlert();
                dispatch(PostApiData(data));
            
              }}
            >
              Submit
            </Button>
            <Button
              className="ms-2"  
              variant="contained"
              color="success"
              type="button"
              onClick= {handleClick }
            >
              Getdata
            </Button>
          </Grid>
        </Grid>
      </form>
      <Table></Table>

      {/* table */}

      {/* <div className="container-fluid">

      <Table className="table mt-3">
        <TableHead>
          <TableRow className="bg-light">
            <TableCell className="text-dark"><b>Title</b></TableCell>
            <TableCell className="text-dark"><b>Description</b></TableCell>
            <TableCell className="text-dark"><b>Category</b></TableCell>
            <TableCell className="text-dark"><b>Actions</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state?.data.users.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>

              <DeleteIcon onClick={() => {showAlert();dispatch(deleteapidata(row.id));}} />
              
                <Link to={`/Editform/${row.id}`}  onClick={() => {
                dispatch(UpdateApiData(row.id));
              }}>
                  <EditIcon />
                </Link>
                <Link to={`/Listform/${row.id}`}>
                  <VisibilityIcon />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div> */}
      {showTable && (
        <div className="container-fluid">
          <Table className="table mt-3">
            <TableHead>
              <TableRow className="bg-light">
                <TableCell className="text-dark"><b>Title</b></TableCell>
                <TableCell className="text-dark"><b>Description</b></TableCell>
                <TableCell className="text-dark"><b>Category</b></TableCell>
                <TableCell className="text-dark"><b>Actions</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state?.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>
                    <DeleteIcon onClick={() => { showAlert(); dispatch(deleteapidata(row.id)); }} />
                    <Link to={`/Editform/${row.id}`} onClick={() => { dispatch(UpdateApiData(row.id)); }}>
                      <EditIcon />
                    </Link>
                    <Link to={`/Listform/${row.id}`}>
                      <VisibilityIcon />
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
      {/* table */}
    </>
  );
}

export default Form;
