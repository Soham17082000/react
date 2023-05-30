import { Item_Crud, fetch_data, update_data ,delete_data} from "../actionsType";
import axios from "axios";
import { productAPI } from "../../apis/apiHandler/controllers";

export const PostApiData = (data) => {
  console.log("hii");

  return async (dispatch) => {
    dispatch({ type: Item_Crud.POST_DATA });
    const res = await productAPI.insertProduct(data);
    console.log("  response res  ", res);
    console.log(" res.data  ", res.data);

    if (res.ResponseStatus === 200) {
      console.log("res+>>>>>>>>>>>>>>>>>>>");
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

export const FetchApiData = () => {
  return async (dispatch) => {
    try {
      const res = await productAPI.getProduct();
      const payload = res.data;
      console.log("getdatahfghfgdhfghdfghfg", res);

      const { users } = res.data;

      dispatch({
        type: fetch_data.FETCH_DATA,
        payload: users,
      });
      console.log("dsfdsgfsgdfgdfsgdsfgdsfgdsfggdr",users)
    } catch (error) {
      console.log("error", error);
    }
  };
};

// export const UpdateApiData = (id, data) => {
//   return async () => {
//     try {
//       const res = await axios.put(
//         `http://localhost:8000/updateformdata/${id}`,
//         data
//       );
//       console.log(res);
//     } catch (error) {
//       console.error("Error In updating API data:", error);
//     }
//   };
// };

export const UpdateApiData = (id,object) => {
  console.log("updateid",id)
  return async (dispatch) => {
    try {
      const res = await productAPI.updateProduct(id,object);
      console.log("resupdatedata",res)
      dispatch({
        type: update_data.UPDATE_DATA,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const deleteapidata = (id) => {
  console.log("id",id)
  return async (dispatch) => {
    try {
      const res = await productAPI.deleteProduct(id);
      console.log("resdeletedata",res)
      dispatch({
        type: delete_data.DELETE_DATA,
      });
      console.log("deletedata", res);
    } catch (error) {
      console.log("error", error);
    }
  };
};

//

