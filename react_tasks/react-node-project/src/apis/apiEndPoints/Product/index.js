export const productEndPoints = {
  INSERT_PRODUCT: '/postformdata',
  GET_PRODUCT:'/getformdata',
  DELETE_PRODUCT:(id)=>`/deleteformdata/${id}`,
  UPDATE_PRODUCT:(id)=>`/updateformdata/${id}`
};
