import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import '../css/listform.css'

function ListForm() {
  const state = useSelector((state) => state.FETCH_DATA);
  console.log("listviewstate",state)

  const { id } = useParams();

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (state) {
      const user = state.find((user) => user.id === id);
     
      setUserData(user);
    }
  }, [state, id]);

  return (
    <>
          <div className="container-fluid bg-dark">

    <h1 > Display Data</h1>
    </div>
      <div className="container-fluid user ">
        <div className="row hidden-md-up d-flex  justify-content-center mt-5 ">
          {userData && (
            <div className="col-md-3 d-flex  p-4 bg-light">
              <Card style={{ width: '18rem' }}>
                <ListGroup variant="flush">
                  <ListGroup.Item><b>Title:</b> {userData.title}</ListGroup.Item>
                  <ListGroup.Item><b>Description:</b> {userData.description}</ListGroup.Item>
                  <ListGroup.Item><b>Category:</b> {userData.category}</ListGroup.Item>
                </ListGroup>
              </Card>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ListForm;
