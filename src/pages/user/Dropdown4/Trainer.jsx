import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import editorConfig from "../../../utils/joditCnf";
import "../../../editor.css";
import Avatar from "../../../assets/Avatar.jpeg";
import { toastSuccess, toastWarn } from "../../../utils/notifyCustom";
import {
  getApi,
  postApiWithFormdataTokenUseFetch,
  postApiWithToken,
  postApiWithTokenWithJsonData,
  postApiWithTokenWithNoFormData,
} from "../../../utils/api";
import LoadingBar from "react-top-loading-bar";
import { useQuery } from "react-query";

const Trainer = () => {
  const loadingBar = useRef(null);
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    content: "",
    images: null,
    language: "",
    age: "",
    feesPerHour: "",
    address: "",
    experience: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  const [img, setImg] = useState({
    images: "",
  });

  const [imgEdit, setImgEdit] = useState({
    images: "",
  });

  const handleImagesUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImg((prevData) => ({
          ...prevData,
          images: reader.result, // Update only the images field
        }));
      };
      reader.readAsDataURL(file);

      // Update the formData state correctly
      setFormData((prevFormData) => ({
        ...prevFormData,
        images: file, // Update only the images field in formData
      }));
    }
  };

  const handleImagesUploadEdit = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgEdit((prevData) => ({
          ...prevData,
          images: reader.result, // Update only the images field
        }));
      };
      reader.readAsDataURL(file);

      // Update the formData state correctly
      setSelectedTrainer((prevFormData) => ({
        ...prevFormData,
        image: file, // Update only the images field in formData
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveData = async (e) => {
    e.preventDefault();

    const url = `${import.meta.env.VITE_URL}${import.meta.env.VITE_SET_CREATE_TRAINER
      }`;

    const formdata = new FormData();
    formdata.append("name", formData.name);
    formdata.append("language", formData.language);
    formdata.append("age", formData.age);
    formdata.append("feesPerHour", formData.feesPerHour);
    formdata.append("address", formData.address);
    formdata.append("content", content);
    formdata.append("experience", formData.experience);
    if (formData.images) {
      formdata.append("image", formData.images);
    }
    // else {
    //   console.error("Images field is not a valid File object.");
    //   return;
    // }

    try {
      const result = await postApiWithFormdataTokenUseFetch(url, formdata);

      // if (!response.ok) {
      //   const errorText = await response.text();
      //   throw new Error(`Server error: ${response.status} ${errorText}`);
      // }

      // const result = await response.json();
      console.log(result);

      if (result.success) {
        toastSuccess("Saved Successfully");
        setFormData({
          name: "",
          content: "",
          images: null,
          language: "",
          age: "",
          feesPerHour: "",
          address: "",
          experience: "",
        });
        setImg({ images: "" });
        setContent("");
      } else {
        toastWarn(result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      toastWarn("An error occurred while saving data.");
    }
  };

  const deleteTrainer = async (trainerId) => {
    const url = `${import.meta.env.VITE_URL}${import.meta.env.VITE_DELETE_TRAINER
      }${trainerId}`;

    try {
      // Make the API call to delete the trainer
      const response = await postApiWithTokenWithNoFormData(url);
      console.log(response, "llllllllllllll");

      if (!response.ok) {
        // Handle non-OK responses
        // const result = await response.json();
        toastWarn(response.data.message || "Failed to delete trainer");
        return;
      }

      // Parse the response
      // const result = await response.json();

      // Show success message
      toastSuccess(response.data.message || "Trainer deleted successfully");

      // Refetch the trainers list after deletion
      await queryGetAllTrainer.refetch();
    } catch (error) {
      console.error("Error deleting trainer:", error);
      toastWarn("An error occurred while deleting the trainer.");
    }
  };

  const EditTrainer = (trainer) => {
    setSelectedTrainer(trainer); // Set the trainer data in state
    setIsModalOpen(true); // Open the modal
  };

  const handleSaveEdit = async () => {
    const url = `${import.meta.env.VITE_URL}${import.meta.env.VITE_EDIT_TRAINER}${selectedTrainer._id}`;
  
    try {
      // Prepare FormData
      const formData = new FormData();
      Object.entries(selectedTrainer).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          formData.append(key, value);
        }
      });
  
      // If an image file exists, append it
      if (selectedTrainer.imageFile) {
        formData.append("image", selectedTrainer.imageFile);
      }
  
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData, // Send as FormData
      });
  
      const responseData = await response.json();
  
      if (response.ok && responseData.data) {
        toastSuccess("Trainer updated successfully");
        setIsModalOpen(false);
        queryGetAllTrainer.refetch(); // Refetch trainers list
      } else {
        toastWarn(responseData.message || "Failed to update trainer");
      }
    } catch (error) {
      console.error("Error updating trainer:", error);
      toastWarn("An error occurred while updating the trainer.");
    }
  };
  

  const url = `${import.meta.env.VITE_URL}${import.meta.env.VITE_GET_TRAINER
    }/get-all`;

  const queryGetAllTrainer = useQuery("getAllTrainer", () => getApi(url));

  console.log(queryGetAllTrainer.data?.data, "hhhhhhhhhhhhhhh");

  // loading
  const startLoading = () => {
    loadingBar.current.continuousStart();
  };
  const finishLoading = () => {
    loadingBar.current.complete();
  };
  useEffect(() => {
    if (queryGetAllTrainer.isLoading) {
      startLoading();
    } else {
      finishLoading();
    }
  }, [queryGetAllTrainer.isLoading]);


  console.log(imgEdit, "hhhhhhooooooo");


  return (
    <div className="ms-60 max-sm:ms-0 max-md:ms-0 pb-6">
      <LoadingBar color="#F11946" ref={loadingBar} />
      <div className="w-full ">
        <div className=" mx-3 bg-white rounded-md max-sm:mx-3 ">
          <div className="text-center  shadow-lg rounded-md mt-2 mb-1 py-4 ">
            <h1 className=" font-bold text-2xl text-[#16884d]">Trainer</h1>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-wrap mx-3">
          <div className="w-full mt-6 pl-1 max-sm:-ml-2 px-2">
            <div className="relative flex flex-col p-2 pb-6 h-full min-w-0 break-words bg-white border-0 shadow-xl rounded-md bg-clip-border">
              <div className="text-center rounded-md bg-gray-300 ">
                <p className="text-2xl font-semibold py-2">
                  Set Trainer Details
                </p>
              </div>
              <div className="flex flex-wrap pt-4">
                <div className="w-full lg:w-3/12 ">
                  <div className="rounded-lg ">
                    <div className="my-2 mx-3 ">
                      {img.images ? (
                        <img
                          src={img.images}
                          alt="Uploaded"
                          className="w-40 h-40"
                        />
                      ) : (
                        <div className="w-40 h-40 bg-lime-200 rounded-md inline-flex items-center justify-center">
                          <span className="text-black">No Image Uploaded</span>
                        </div>
                      )}
                    </div>
                    <input
                      type="file"
                      accept="file/*"
                      onChange={handleImagesUpload}
                      className="block w-full text-xs text-gray-500
                        file:mx-3 file:py-1
                        file:rounded-full file:border-0
                        file:text-xs file:font-semibold
                        file:bg-green-100 file:text-green-700
                        hover:file:bg-blue-100"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-3">
                  <input
                    value={formData.name}
                    name="name"
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter Name"
                    className="w-full text-xl p-2 font-semibold border-2 rounded-md my-2"
                  />
                  <div className="flex w-full pt-4">
                    <label className="w-5/12 text-xl ml-1">Experience:</label>
                    <input
                      value={formData.experience}
                      name="experience"
                      onChange={handleChange}
                      type="text"
                      className="w-7/12 border-2 rounded-md p-1"
                    />
                  </div>
                  <div className="flex w-full pt-4">
                    <label className="w-5/12 text-xl ml-1">
                      Fees per Hour:
                    </label>
                    <input
                      value={formData.feesPerHour}
                      name="feesPerHour"
                      onChange={handleChange}
                      type="number"
                      className="w-7/12 border-2 rounded-md p-1"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-3 my-2">
                  <div className="flex w-full">
                    <label className="w-4/12 max-sm:w-5/12 text-xl ml-1">
                      City:
                    </label>
                    <input
                      value={formData.address}
                      name="address"
                      onChange={handleChange}
                      type="text"
                      className="w-8/12 max-sm:w-7/12 border-2 rounded-md p-1"
                    />
                  </div>
                  <div className="flex w-full pt-4">
                    <label className="w-4/12 max-sm:w-5/12 text-xl ml-1">
                      Language:
                    </label>
                    <input
                      value={formData.language}
                      name="language"
                      onChange={handleChange}
                      type="text"
                      className="w-8/12 max-sm:w-7/12 border-2 rounded-md p-1"
                    />
                  </div>
                  <div className="flex w-full pt-4">
                    <label className="w-4/12 max-sm:w-5/12 text-xl ml-1">
                      age:
                    </label>
                    <input
                      value={formData.age}
                      name="age"
                      onChange={handleChange}
                      type="number"
                      className="w-8/12 max-sm:w-7/12 border-2 rounded-md p-1"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full px-3 max-sm:pt-4">
                <div className="my-2 rounded-md">
                  <JoditEditor
                    ref={editor}
                    value={content}
                    config={editorConfig}
                    onBlur={(newContent) => setContent(newContent)}
                  />
                </div>
              </div>
              <button
                onClick={handleSaveData}
                type="button"
                className="text-left my-4 ml-3 pl-3 bg-green-600 hover:bg-green-500 h-[34px] w-20 rounded-md text-white font-semibold"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-wrap mx-3">
          <div className="w-full mt-6 pl-1 max-sm:-ml-2 px-2">
            <div className="relative flex flex-col  p-2 pb-6 h-full min-w-0 break-words bg-white border-0 shadow-xl rounded-md bg-clip-border">
              <div className="text-center rounded-md bg-gray-300 ">
                <p className="text-2xl font-semibold py-2">Trainer Details</p>
              </div>
              {queryGetAllTrainer.data?.data?.trainerData.map(
                (trainerData, index) => (
                  <div key={index} className="flex flex-wrap pt-4">
                    <div className="w-full lg:w-3/12 px-3">
                      <img
                        src={trainerData.image}
                        alt="Avatar"
                        className="mt-2 h-40 w-40  rounded-md object-cover"
                      />
                    </div>
                    <div className="w-full lg:w-4/12 px-3">
                      <h1
                        disabled
                        type="text"
                        className="w-full p-2 font-semibold border-2 rounded-md my-2"
                      >
                        {trainerData.name}
                      </h1>
                      <div className="flex w-full pt-4">
                        <label className="w-5/12 text-xl ml-1">
                          Experience:
                        </label>
                        <h2
                          disabled
                          type="text"
                          className=" w-7/12 border-2 rounded-md p-1"
                        >
                          {trainerData.experience}
                        </h2>
                      </div>
                      <div className="flex w-full pt-4">
                        <label className="w-5/12 text-xl ml-1">
                          Fees per Hour:
                        </label>
                        <h2
                          disabled
                          type="text"
                          className=" w-7/12 border-2 rounded-md p-1"
                        >
                          {trainerData.feesPerHour}
                        </h2>
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-3 my-2">
                      <div className="flex w-full">
                        <label className="w-4/12 max-sm:w-5/12 text-xl ml-1">
                          City:
                        </label>
                        <h2
                          disabled
                          type="text"
                          className=" w-8/12 max-sm:w-7/12 border-2 rounded-md p-1"
                        >
                          {trainerData.address}
                        </h2>
                      </div>
                      <div className="flex w-full pt-4">
                        <label className="w-4/12 max-sm:w-5/12 text-xl ml-1">
                          Language:
                        </label>
                        <h2
                          disabled
                          type="text"
                          className=" w-8/12 max-sm:w-7/12 border-2 rounded-md p-1"
                        >
                          {trainerData.language}
                        </h2>
                      </div>
                      <div className="flex w-full pt-4 p-3 mx-8">
                        <button
                          onClick={() => deleteTrainer(trainerData._id)}
                          className="w-4/12 max-sm:w-5/12 text-xl ml-1 bg-red-600 text-white rounded-md"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => EditTrainer(trainerData)}
                          className="w-4/12 max-sm:w-5/12 text-xl ml-1 bg-green-700 text-white rounded-md"
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                    <div className="w-full py-3 px-3">
                      <p disabled className="w-full border-2 p-2 rounded-md">
                        <div
                          className="custom-content text-black"
                          dangerouslySetInnerHTML={{
                            __html: trainerData.content,
                          }}
                        />
                      </p>
                    </div>
                  </div>
                )
              )}

            </div>
            {isModalOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
                <div className="bg-white w-96 p-6 rounded-md shadow-lg">
                  <h2 className="text-xl font-bold mb-4">Edit Trainer</h2>

                  <div className="rounded-lg ">
                    <div className="my-2 mx-3 ">
                      {imgEdit.images ? (
                        <img
                          src={imgEdit.images}
                          alt="Uploaded"
                          className="w-40 h-40"
                        />
                      ) : (
                        <div className="w-40 h-40 bg-lime-200 rounded-md inline-flex items-center justify-center">
                          <span className="text-black">No Image Uploaded</span>
                        </div>
                      )}
                    </div>
                    <input
                      type="file"
                      accept="file/*"
                      onChange={handleImagesUploadEdit}
                      className="block w-full text-xs text-gray-500
                        file:mx-3 file:py-1
                        file:rounded-full file:border-0
                        file:text-xs file:font-semibold
                        file:bg-green-100 file:text-green-700
                        hover:file:bg-blue-100"
                    />
                  </div>
                  {/* Name */}
                  <input
                    value={selectedTrainer?.name || ""}
                    name="name"
                    onChange={(e) =>
                      setSelectedTrainer((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    type="text"
                    placeholder="Enter Name"
                    className="w-full p-2 border rounded-md mb-4"
                  />

                  <input
                    value={selectedTrainer?.age || ""}
                    name="age"
                    onChange={(e) =>
                      setSelectedTrainer((prev) => ({
                        ...prev,
                        age: e.target.value,
                      }))
                    }
                    type="number"
                    placeholder="Enter Age"
                    className="w-full p-2 border rounded-md mb-4"
                  />

                  <input
                    value={selectedTrainer?.address || ""}
                    name="address"
                    onChange={(e) =>
                      setSelectedTrainer((prev) => ({
                        ...prev,
                        address: e.target.value,
                      }))
                    }
                    type="text"
                    placeholder="Enter City"
                    className="w-full p-2 border rounded-md mb-4"
                  />

                  <input
                    value={selectedTrainer?.language || ""}
                    name="language"
                    onChange={(e) =>
                      setSelectedTrainer((prev) => ({
                        ...prev,
                        language: e.target.value,
                      }))
                    }
                    type="text"
                    placeholder="Enter Language"
                    className="w-full p-2 border rounded-md mb-4"
                  />

                  {/* Add other fields similarly (e.g., feesPerHour, language, etc.) */}

                  {/* Buttons */}
                  <div className="flex justify-between mt-4">
                    <button
                      className="bg-green-600 text-white px-4 py-2 rounded-md"
                      onClick={handleSaveEdit}
                    >
                      Save
                    </button>
                    <button
                      className="bg-red-600 text-white px-4 py-2 rounded-md"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainer;
