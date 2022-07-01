import fetchData from "../../../common/fetchData";

export async function fetchAllProducts() {
  try {
    const data1 = await fetchData.get(`products/`);
    console.log(data1.data);
    return data1.data;
  } catch (error) {
    const errorText = "Oops something went wrong...";
    return errorText;
  }
}
