import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {UpdateApiData } from "../redux/actions/apiActions";


import {
  Container,
  Grid,
  TextField,
  TextareaAutosize,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { useSelector,useDispatch } from "react-redux";

import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";

function Editform() {
  const dispatch = useDispatch();

  const [category, setCategory] = useState("");
  const state = useSelector((state) => state.FETCH_DATA);
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (state) {
      const user = state.find((user) => user.id === id);
      setUserData(user);
    }
  }, [state, id]);
  const showAlert = () => {
    Swal.fire({
        title: "Success",
        text: "Edit successful",
        icon: "success",
        confirmButtonText: "OK",
      });
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(UpdateApiData(id, userData));
 
  };

  return (
    <>
      {userData && (
        <form onSubmit={handleSubmit}>
          <h4>Edit</h4>
          <Grid container spacing={1} className="mt-3 p-3 bg-light">
            <Grid item lg={12} md={12} sm={12}>
              <TextField
                label="Title"
                name="title"
                className="form-control"
                color="primary"
                variant="outlined"
                type="text"
                value={userData.title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item lg={12} md={12} sm={12}>
              <TextareaAutosize
                label="Description"
                name="description"
                className="form-control"
                color="primary"
                variant="outlined"
                minRows={3}
                placeholder="Enter description"
                value={userData.description}
                onChange={handleChange}
              />
            </Grid>

            <Grid className="ms-2">
              <h6>Category</h6>
            </Grid>

            <Grid item lg={12} md={12} sm={12}>
              <Select
                label="Category"
                name="category"
                className="form-control"
                color="primary"
                variant="outlined"
                value={userData.category}
                onChange={handleChange}
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
            <Grid item lg={12} md={12} sm={12} className="d-flex justify-content-center">
              <Button variant="contained" color="success" type="submit"  onClick={() => {
                showAlert();dispatch(UpdateApiData());
              }}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>

    
      )}

   
    </>
  );
}

export default Editform;
