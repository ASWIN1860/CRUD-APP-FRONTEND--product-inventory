import baseUrl from "./baseUrl";
import commonApi from "./commonApi";

//Add products
export const addProductApi=async(data)=>{
    return await commonApi("POST",`${baseUrl}/productData`,data)
}

//get products

export const getProductApi=async(data)=>{
    return await commonApi("GET",`${baseUrl}/productData`,data)
}

//delete products
export const deleteProductApi=async(id)=>{
    return await commonApi("DELETE",`${baseUrl}/productData/${id}`,{})
}

//edit products
export const editProductApi=async(id,data)=>{
    return await commonApi("PUT",`${baseUrl}/productData/${id}`,data)
}