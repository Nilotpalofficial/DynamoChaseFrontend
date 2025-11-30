import axios from "axios";
import { toastError, toastWarn } from "./notifyCustom";

export const getApi = async (url) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    return error;
  }
};

export const postApiWithToken = async (url, formData) => {


  let data = JSON.stringify(formData);

  try {
      const token = localStorage.getItem("chess-admin-token")
     const response= await axios(url, {
          method: "POST",
          headers: {
              Authorization: JSON.parse(token),
              "Content-Type": "application/json",
          },
          data: data
      })
         return response;
        
  } catch (error) {
      console.log(error.response.data.message);
      toastError(error.response.data.message)
      return error;
  }

}

export const postApiWithTokenWithNoFormData = async (url) => {


  // let data = JSON.stringify(formData);

  try {
      const token = localStorage.getItem("chess-admin-token")
     const response= await axios(url, {
          method: "POST",
          headers: {
              Authorization: JSON.parse(token),
              "Content-Type": "application/json",
          },
          // data: data
      })
         return response;
        
  } catch (error) {
    console.log("kkkkkkkkk")
      console.log(error.response.data.message);
      toastError(error.response.data.message)
      return error;
  }

}

export const postApiWithTokenWithJsonData = async (url, data) => {
  try {
    const token = localStorage.getItem("chess-admin-token");
    const response = await axios({
      method: "POST",
      url: url,
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`, // Ensure Bearer token format
        "Content-Type": "application/json", // JSON data header
      },
      data: JSON.stringify(data), // Serialize data into JSON
    });
    return response.data; // Ensure you return `response.data` for easy usage
  } catch (error) {
    console.error("Error in postApiWithTokenWithJsonData:", error);
    if (error.response && error.response.data && error.response.data.message) {
      toastError(error.response.data.message); // Toast API error message
    } else {
      toastError("An unexpected error occurred.");
    }
    throw error; // Re-throw the error for further handling
  }
};


export const getApiwithtoken = async (url) => {
  try {
    const response = await axios({
      method: "GET",
      url: url,
      responseType: "json",
      headers: {
        Authorization: JSON.parse(localStorage.getItem("chess-admin-token")),
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const postApiWithFormdata = async (url, formData) => {
  let data = JSON.stringify(formData);

  try {
    const response = await axios(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    });
    return response;
  } catch (error) {
    console.log(error);
    toastError(error.response.data.message);
    return error.response;
  }
};

export const postApiWithFormdataToken = async (url, formData) => {
  try {
    const response = await axios.post(url, formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("chess-user-token")}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.response?.data?.message || "An error occurred");
  }
};
export const postApiWithFormdataTokenUseFetch = async (url, formData) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("chess-admin-token"),
      },
      body: formData,
      redirect: "follow",
    });
    const result = await response.json();
    return result
  } catch (error) {
    console.error(error);
    throw new Error(error.response?.data?.message || "An error occurred");
  }
};


export const postApiWithFormdataTokenuseRow = async (url, formData) => {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", localStorage.getItem("chess-user-token"));
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify(formData);
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const response = await fetch(url, requestOptions)
    const result = await response.json();
    return result
  } catch (error) {
    console.error(error);
    throw new Error(error.response?.data?.message || "An error occurred");
  }

};
