
import { commanResponse } from "../../../apiUtils/models/commonResponse";
import { productService } from "../../services/Product";

export const productController = {
  insertProduct,
  getProduct,
  deleteProduct,
  updateProduct
};

async function insertProduct(object) {
  try {
    let responseOBJ = new commanResponse();
    console.log("OBJECT", object);
 
    const response = await productService.createProduct(object);

    console.log("responsemodel=>>>>>>>>>>>>>>>>>>>", response);

    return responseOBJ;
  } catch (error) {
    console.log("error From controller::>", error);
  }
}

async function getProduct() {
  try {
    let responseOBJ = new commanResponse();
    const response =await productService.getProduct();
    console.log("responsemodelforgetdata", response);
  responseOBJ.Message=response.data.message;
  responseOBJ.data=response.data.data;

    return responseOBJ;
  } catch (error) {
    console.log("error From controller::>", error);
  }
}

async function deleteProduct(id)
{
  try{
    let responseOBJ=new commanResponse();
    const response=await productService.deleteProduct(id);
    console.log("deletemodel", response);


    return responseOBJ;
  }
  catch(error)
  {
    console.log("error From controller::>", error);

  }
}

async function updateProduct(id,object)
{
  try{
    let responseOBJ=new commanResponse();
    const response=await productService.updateProduct(id,object);
    console.log("updatemodel", response);


    return responseOBJ;
  }
  catch(error)
  {
    console.log("error From controller::>", error);

  }
}


