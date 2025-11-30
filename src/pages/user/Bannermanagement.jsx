import React, { useEffect, useRef, useState } from 'react'
import Avatar from '../../assets/Avatar.jpeg';
import { toastSuccess, toastWarn } from '../../utils/notifyCustom';
import { useQuery } from 'react-query';
import { getApiwithtoken, postApiWithFormdataTokenUseFetch } from '../../utils/api';
import LoadingBar from 'react-top-loading-bar';
const Bannermanagement = () => {
  const loadingBar = useRef(null);
  const [formData, setFormData] = useState({
    title: "",
    images: []
  });

  const [img, setImg] = useState({
    images: []
  });

  const handleImagesUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = [];

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        newImages.push(reader.result);
        setImg((prevData) => ({
          ...prevData,
          images: [...prevData.images, reader.result] // Append new image data URL to the images array
        }));
      };
      reader.readAsDataURL(file);
    });

    // Update the formData state with the new files
    setFormData((prevFormData) => ({
      ...prevFormData,
      images: [...prevFormData.images, ...files] // Append new files to the formData images array
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSaveData = async (e) => {
    e.preventDefault();
    const url = `${import.meta.env.VITE_URL}${import.meta.env.VITE_SET_BANNER}`;

    const formdata = new FormData();
    formdata.append("title", formData.title);

    if (Array.isArray(formData.images) && formData.images.every(image => image instanceof File)) {
      formData.images.forEach((image, index) => {
        formdata.append(`images`, image);
      });
    } 
    // else {
    //   console.error("Images field is not a valid array of File objects.");
    //   return;
    // }

    try {
      const result = await postApiWithFormdataTokenUseFetch(url, formdata)
      console.log(result);

      if (result.success) {
        toastSuccess("Saved Successfully");
        setFormData({
          title: "",
          images: []
        });
        setImg({
          images: []
        });
      } else {
        toastWarn(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      toastWarn('An error occurred while saving data.');
    }
  };

  const url = `${import.meta.env.VITE_URL}${import.meta.env.VITE_GET_BANNER}/getAll`;
  // const { data, error, isLoading } = useQuery('GETRULE', () => getApiwithtoken(url));
  // console.log(data?.data?.data, "hhhhhhhhhhhhhhh");

  const queryGetAllRule = useQuery("getAllRule", () => getApiwithtoken(url),);


  console.log(queryGetAllRule.data?.data?.data, "hhhhhhhhhhhhhhh");

  // loading
  const startLoading = () => {
    loadingBar.current.continuousStart();
  };
  const finishLoading = () => {
    loadingBar.current.complete();
  };
  useEffect(() => {
    if (queryGetAllRule.isLoading) {
      startLoading();
    } else {
      finishLoading();
    }
  }, [queryGetAllRule.isLoading]);


  return (
    <div className='ms-60 max-sm:ms-0 pb-6'>
      <LoadingBar color="#F11946" ref={loadingBar} />
      <div className='w-full '>
        <div className=' mx-3 bg-white rounded-md max-sm:mx-3 '>
          <div className='text-center  shadow-lg rounded-md mt-2 mb-1 py-4 '>
            <h1 className=' font-bold text-2xl text-[#16884d]'>Home Page Banner</h1>
          </div>
        </div>
      </div>
      <div className='w-full '>
        <div className='flex flex-wrap mx-3 '>
          <div className='w-full mt-6 pl-1 max-sm:-ml-2 px-2'>
            <div className='relative flex flex-col  p-2 pb-6 h-full min-w-0 break-words bg-white border-0 shadow-xl rounded-md bg-clip-border'>
              <div className='text-center rounded-md bg-gray-300 '>
                <p className='text-2xl font-semibold py-2'>Set Banner Details</p>
              </div>

              <div className='w-full flex flex-wrap pt-4'>
                <div className='w-full lg:w-1/4 px-3 text-start'>
                  {/* <label className='text-lg font-semibold bg-gray-300 py-1 px-2 rounded-md'>Set Banner:</label> */}
                  <div className="rounded-lg">
                    <div className="my-2 mx-3 items-center justify-center">
                      {img.images && img.images.length > 0 ? (
                        img.images.map((image, idx) => (
                          <img key={idx} src={image} alt="Uploaded" className="w-40 h-40" />
                        ))
                      ) : (
                        <div className="w-40 h-40 bg-lime-200 rounded-md flex items-center justify-center">
                          <span className="text-black">No images Uploaded</span>
                        </div>
                      )}
                    </div>
                    <input
                      type="file"
                      accept="image/*"
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

                <div className='w-full lg:w-1/4 px-3 max-sm:pt-4 max-sm:pb-6 text-start'>
                  {/* <label className='text-lg font-semibold bg-gray-300 py-1 px-2 rounded-md'>Banner Type:</label> */}
                  <select name="title"
                    value={formData.title}
                    onChange={handleChange} className='text-normal  text-center  font-semibold border-2 rounded-md mt-2 px-3 py-2 mx-4'>
                    <option className=''>Select Banner</option>
                    <option>homeBanner</option>
                    <option>tournamentBanner</option>
                  </select>
                </div>




                {/* <div className='w-full  lg:w-3/12 max-sm:pt-4 mx-3 items-center justify-center '>
                   <label className=' text-lg font-semibold bg-gray-300 py-1 px-2 rounded-md'> Title:</label><br/>
                     <p type='text' className='text-xl px-3 text-cente w-full h-12 font-semibold border-2 rounded-md mt-2 py-2'></p>
                   </div> */}
              </div>
              <button onClick={handleSaveData} type='button' className=' text-left max-sm:mt-8 my-4 ml-3 pl-3 bg-green-600 hover:bg-green-500 h-[34px] w-20 rounded-md text-white font-semibold'>Submit</button>

            </div>
          </div>


        </div>

      </div>
      <div className='w-full overflow-y-auto mt-6 h-72'>
        {queryGetAllRule.data?.data?.data.map((banner, index) => (
          <div key={index} className='flex flex-wrap mx-3 '>
            <div className='w-full  pl-1 max-sm:-ml-2 px-2'>
              <div className='relative flex flex-col  p-2 pb-6 h-full min-w-0 break-words bg-white border-0 shadow-xl rounded-md bg-clip-border'>
                <div className='text-center rounded-md bg-gray-300 '>
                  <p className='text-2xl font-semibold py-2'>{banner.title}</p>
                </div>

                <div className=' flex flex-wrap pl-6 pt-4'>
                    {banner?.images?.map((img, index) => (
                  <div key={index} className='w-full lg:w-1/4 px-6 text-start'>
                    {/* <label className='text-lg font-semibold bg-gray-300 py-1 px-2 rounded-md'>Banner:</label> */}
                      <img  src={img} alt='Avatar' className='mt-2 w-1/2 rounded-md object-cover' />
                  </div>
                    ))}

                  {/* <div className='w-full lg:w-1/4 px-6 max-sm:pt-4 max-sm:pb-6 text-start'>
                    <label className='text-lg font-semibold bg-gray-300 py-1 px-2 rounded-md'>Banner Type:</label>
                    <p className='text-normal  text-center h-[40px] font-semibold border-2 rounded-md mt-2 py-2 '>

                    </p>
                  </div> */}

                </div>
              </div>
            </div>


          </div>
        ))}
        {/* <div className='flex flex-wrap mx-3 '>
          <div className='w-full mt-2 pl-1 max-sm:-ml-2 px-2'>
            <div className='relative flex flex-col  p-2 pb-6 h-full min-w-0 break-words bg-white border-0 shadow-xl rounded-md bg-clip-border'>
              <div className='text-center rounded-md bg-gray-300 '>
                <p className='text-2xl font-semibold py-2'>Banner Details</p>
              </div>

              <div className=' flex flex-wrap pl-6 pt-4'>
                <div className='w-full lg:w-1/4 px-6 text-start'>
                  <label className='text-lg font-semibold bg-gray-300 py-1 px-2 rounded-md'>Banner:</label>
                  <img src={Avatar} alt='Avatar' className='mt-2 w-1/2 rounded-md object-cover' />
                </div>
                <div className='w-full lg:w-1/4 px-6 max-sm:pt-4 text-start '>
                  <label className='text-lg font-semibold bg-gray-300 py-1 px-2 rounded-md'> Advertisement:</label>
                  <img src={Avatar} alt='Avatar' className='mt-2 w-1/2 rounded-md object-cover' />
                </div>
                <div className='w-full lg:w-1/4 px-6 max-sm:pt-4 text-start'>
                  <label className='text-lg font-semibold bg-gray-300 py-1 px-2 rounded-md'>Sponsorship:</label>
                  <img src={Avatar} alt='Avatar' className='mt-2 w-1/2 rounded-md object-cover' />
                </div>
                <div className='w-full lg:w-1/4 px-6 max-sm:pt-4 max-sm:pb-6 text-start'>
                  <label className='text-lg font-semibold bg-gray-300 py-1 px-2 rounded-md'>Banner Type:</label>
                  <p className='text-normal  text-center h-[40px] font-semibold border-2 rounded-md mt-2 py-2'>

                  </p>
                </div>

              </div>
            </div>
          </div>


        </div> */}

      </div>
    </div>
  )
}

export default Bannermanagement
