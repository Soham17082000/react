import { requestMethod } from '../../../apiUtils/constants';
import { requestModel } from '../../../apiUtils/models/requestModel';
import { axiosRepository } from '../../repository';
import { productEndPoints } from '../../../apiEndPoints/Product/index';

export const productService = {
  createProduct: async (body) => {
    const requestObj = new requestModel();
    try {
      requestObj.method = requestMethod.POST;
      requestObj.url = productEndPoints.INSERT_PRODUCT;
      requestObj.data = body;

      return await axiosRepository.request(requestObj);

    } catch (error) {
      console.log('error from services:', error);
    }
  },

  getProduct: async () => {
    const requestObj = new requestModel();
    try {
      requestObj.method = requestMethod.GET;
      requestObj.url = productEndPoints.GET_PRODUCT;
      // requestObj.data = body;


      return await axiosRepository.request(requestObj);


    } 
    catch (error) {
      console.log('error from services:', error);
    }

  },
  deleteProduct:async(id)=>{
    const requestObj = new requestModel();
console.log("requestObjDelete",requestObj)
    try {
      requestObj.method = requestMethod.DELETE;
      requestObj.url = productEndPoints.DELETE_PRODUCT(id);


      return await axiosRepository.request(requestObj);

    } catch (error) {
      console.log('error from services:', error);
    }

  },

  updateProduct:async(id,object)=>{
    const requestObj = new requestModel();
console.log("requestObjupdate",requestObj)
    try {
      requestObj.method = requestMethod.PUT;
      requestObj.url = productEndPoints.UPDATE_PRODUCT(id,object);
      requestObj.data = object;


      return await axiosRepository.request(requestObj);

    } catch (error) {
      console.log('error from services:', error);
    }

  }

};
