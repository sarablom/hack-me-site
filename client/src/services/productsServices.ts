import { Product } from "../models/Product";

export async function fetchDataByUrl(url: string) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

export async function getAllProducts() {
  const fetchUrl = "/api/products";
  return fetchDataByUrl(fetchUrl);
}

export async function getSingleProduct(id: string) {
  const fetchUrl = `/api/products/${id}`;
  return fetchDataByUrl(fetchUrl);
}

export async function updateProduct(id: string, product: Product) {
  const response =await fetch(`/api/products/${id}`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  const productData = await response.json();
  
  return productData;
}

export async function deleteProduct(token: string, id: string) {
  const response = await fetch(`/api/products/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
}