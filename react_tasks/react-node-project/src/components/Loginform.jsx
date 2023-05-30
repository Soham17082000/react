import React, { useState } from "react";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Grid,
  TextField,
  TextareaAutosize,
  Select,
  MenuItem,
} from "@mui/material";
import { Button } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";

function Loginform() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.FETCH_DATA);

  console.log("state insert", state);
  const [data, setdata] = useState({
    email: "",
    password: "",
  });
  
  function onchange(e) {
    setdata({ ...data, [e.target.name]: e.target.value });

    console.log(data);
  }

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-6 col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4 text-success">Login</h2>
              <form>
                <div className="mb-3">
                  <TextField
                    label="Email"
                    name="email"
                    value={data.email}
                    className="form-control"
                    color="primary"
                    variant="outlined"
                    type="text"
                    onChange={onchange}
                  />
                </div>
                <div className="mb-3">
                  <TextField
                    label="Password"
                    name="password"
                    value={data.password}
                    className="form-control"
                    color="primary"
                    variant="outlined"
                    type="password"
                    onChange={onchange}
                  />
                </div>
                <div className="text-center">
                  <Button
                    className="ms-2"
                    variant="contained"
                    color="success"
                    type="button"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginform;
