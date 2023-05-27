import { Item_Crud,fetch_data,update_data } from "../actionsType";
import { postAPI } from "../apis/index";
import axios from 'axios';


export const PostApiData = (data) => {
  return async (dispatch) => {
    dispatch({ type: Item_Crud.POST_DATA });
    const res = await axios.post('http://localhost:8000/postformdata',data);
    console.log("hii");
    console.log("  res  ", res);
    console.log(" res.data  ", res.data);

    if (res.status === 200) {
      dispatch({
        type: Item_Crud.POSTDATA_SUCCESS,
        payload: "data stored",
      });
      console.log(res.data);
    }

    if (res.status === 400) {
      const { error } = res.data;

      dispatch({
        type: Item_Crud.POSTDATA_FAILURE,
        payload: { error },
      });
    }
  };
};


function FetchApiData() {
  return function(dispatch) {
      return axios.get('http://localhost:8000/getformdata').then(data=>{
        const payload = data.data;
      console.log("PAYLOAD",payload); 
          dispatch({
              type: fetch_data.FETCH_DATA,
             payload:payload
          });
      });

  };
}


// export const UpdateApiData = (id, data) => {
//   return async (dispatch) => {
//     try {
//       const res = await axios.put(`http://localhost:8000/updateformdata/${id}`, data);
//       console.log(res);
//     } catch (error) {
//       console.error("Error In updating API data:", error);
//     }
//   };
// }
export const UpdateApiData = (id, data) => {
  return async () => {
    try {
      const res = await axios.put(`http://localhost:8000/updateformdata/${id}`, data);
      console.log(res);
    } catch (error) {
      console.error("Error In updating API data:", error);
    }
  };
};


export {FetchApiData}