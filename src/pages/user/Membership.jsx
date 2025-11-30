import React, { useState, useRef,useEffect } from 'react';
import JoditEditor from 'jodit-react';
import Avatar from '../../assets/Avatar.jpeg';
import '../../editor.css';
import editorConfig from '../../utils/joditCnf';
import LoadingBar from 'react-top-loading-bar';
import { toastSuccess, toastWarn } from '../../utils/notifyCustom';
import {getApi, postApiWithFormdataTokenUseFetch } from '../../utils/api';
import { useQuery } from 'react-query';

const Membership = () => {
  const loadingBar = useRef(null);
  const editor = useRef(null);
  const [content, setContent] = useState('');

  const [formData, setFormData] = useState({
    title: "",
    price: 0,
    membershipimg: null
  });

  const [img, setImg] = useState({
    membershipimg: ''
  });

  const handleImagesUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImg((prevData) => ({
          ...prevData,
          membershipimg: reader.result // Update only the images field
        }));
      };
      reader.readAsDataURL(file);

      // Update the formData state correctly
      setFormData((prevFormData) => ({
        ...prevFormData,
        membershipimg: file // Update only the images field in formData
      }));
    }
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
    const url = `${import.meta.env.VITE_URL}${import.meta.env.VITE_SET_MEMBERSHIP}`;

    const formdata = new FormData();
    formdata.append("title", formData.title);
    formdata.append("content", content);
    formdata.append("price", formData.price);

    if (formData.membershipimg instanceof File) {
      formdata.append("membershipimg", formData.membershipimg);
    } 
    // else {
    //   console.error("Membership image is not a valid File object.");
    //   return;
    // }

    try {
      const result = await postApiWithFormdataTokenUseFetch(url, formdata)
      console.log(result);

      if (result.success) {
        toastSuccess("Saved Successfully");
        setFormData({
          title: "",
          price: 0,
          membershipimg: null
        });
        setImg({
          membershipimg: ''
        });
        setContent("");
      } else {
        toastWarn(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      toastWarn('An error occurred while saving data.');
    }
  };
  console.log(formData);


  const url = `${import.meta.env.VITE_URL}${import.meta.env.VITE_GET_MEMBERSHIP }`;
  const queryGetAllMembership = useQuery("getAllMembership", () => getApi(url),);


  console.log(queryGetAllMembership.data?.data, "hhhhhhhhhhhhhhh");

  // loading
  const startLoading = () => {
    loadingBar.current.continuousStart();
  };
  const finishLoading = () => {
    loadingBar.current.complete();
  };
  useEffect(() => {
    if (queryGetAllMembership.isLoading) {
      startLoading();
    } else {
      finishLoading();
    }
  }, [queryGetAllMembership.isLoading]);

  return (
    <div>
      <div className='ms-60 max-sm:ms-0 pb-6'>
      <LoadingBar color="#F11946" ref={loadingBar} />
        <div className='w-full'>
          <div className='mx-3 bg-white rounded-md max-sm:mx-3'>
            <div className='text-center shadow-lg rounded-md mt-2 mb-1 py-4'>
              <h1 className='font-bold text-2xl text-[#16884d]'>Membership</h1>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <div className='flex flex-wrap mx-3'>
            <div className='w-full mt-6 pl-1 max-sm:-ml-2 px-2'>
              <div className='relative flex flex-col p-2 pb-6 h-full min-w-0 break-words bg-white border-0 shadow-xl rounded-md bg-clip-border'>
                <div className='text-center rounded-md bg-gray-300'>
                  <p className='text-2xl font-semibold py-2'>Set Membership Details</p>
                </div>
                <div className='w-full flex flex-wrap'>
                  <div className='w-full lg:w-1/2 p-4 px-6 inline-flex items-center justify-center'>
                    <select
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className='text-lg p-1 text-center max-sm:w-full w-3/4 overflow-x-auto font-semibold border-2 rounded-md py-2'
                    >
                      <option>Select Heading</option>
                      <option>Intro</option>
                      <option>Popular</option>
                      <option>Enterprise</option>
                    </select>
                  </div>
                  <div className='w-full lg:w-1/2 p-4 inline-flex items-center justify-center'>
                    <div className='px-2'>
                      <label className='bg-green-600 p-2 text-lg text-white max-sm:w-1/4 font-semibold rounded-l-md'>₹</label>
                      <input
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        type='number'
                        className='border-2 py-1 max-sm:w-1/2 font-semibold text-center text-lg'
                      />
                      <label className='bg-[#dddd23] p-2 text-base lg:text-lg max-sm:w-1/4 font-semibold rounded-r-md'>Per month</label>
                    </div>
                  </div>
                </div>
                <div className='w-full lg:w-5/12 inline-flex items-center justify-center'>
                  <div className="rounded-lg">
                    <div className="my-2">
                      {img.membershipimg ? (
                        <img src={img.membershipimg} alt="Uploaded" className="w-40 h-40" />
                      ) : (
                        <div className="w-40 h-40 bg-lime-200 rounded-md flex">
                          <span className="text-black inline-flex items-center justify-center pl-1">No images Uploaded</span>
                        </div>
                      )}
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImagesUpload}
                      className="block w-full text-xs text-gray-500
                        file:ml- file:py-1
                        file:rounded-full file:border-0
                        file:text-xs file:font-semibold
                        file:bg-green-100 file:text-green-700
                        hover:file:bg-blue-100"
                    />
                  </div>
                </div>
                <div className='w-full px-3 max-sm:pt-4'>
                  <div className='my-2 rounded-md'>
                    <JoditEditor
                      ref={editor}
                      value={content}
                      config={editorConfig}
                      onBlur={newContent => setContent(newContent)}
                      onChange={newContent => setContent(newContent)}
                    />
                  </div>
                </div>
                <button
                  onClick={handleSaveData}
                  type='button'
                  className='text-left my-4 ml-3 pl-3 bg-green-600 hover:bg-green-500 h-[34px] w-20 rounded-md text-white font-semibold'
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <div className='flex flex-wrap mx-3'>
            <div className='w-full mt-6 pl-1 max-sm:-ml-2 px-2'>
              <div className='relative flex flex-col p-2 pb-6 h-full min-w-0 break-words bg-white border-0 shadow-xl rounded-md bg-clip-border'>
                <div className='text-center rounded-md bg-gray-300'>
                  <p className='text-2xl font-semibold py-2'>Membership Details</p>
                </div>
                {queryGetAllMembership.data?.data?.data.map((data,index) =>
                <div key={index} className='w-full flex flex-wrap'>
                  <div className=' w-full lg:w-1/2  p-4 px-6 inline-flex items-center justify-center'>
                    <p className='text-lg p-1 h-10 text-center max-sm:w-full w-3/4 overflow-x-auto font-semibold border-2 rounded-md py-2'>{data.title}</p>
                  </div>
                  <div className='w-full lg:w-1/2 p-4 inline-flex items-center justify-center'>
                    <div className='w-full lg:px-6 px-2 flex'>
                      <label className='bg-green-600 p-2 h-10 text-lg text-white  font-semibold rounded-l-md'>₹</label>
                    <p className='border-2 py-1 h-10 w-1/2 font-semibold text-center text-lg'>{data.price}</p>
                      <label className='bg-[#dddd23] p-2 h-10 text-base max-sm:text-xs leading-4 lg:text-lg font-semibold rounded-r-md'>Per month</label>
                    </div>
                  </div>
                  <div className='w-full lg:w-5/12 inline-flex items-center justify-center'>
                  <div className="rounded-lg">
                    <div className="my-2">
                    <img src={data?.images} alt='Avatar' className='mt-2 h-40 w-40  rounded-md object-cover' />
                    </div>
                  
                  </div>
                </div>
                <div className='w-full px-3 max-sm:pt-4'> 
                <p disabled className='w-full border-2 p-2 rounded-md'><div className='custom-content text-black'   dangerouslySetInnerHTML={{ __html: data.content }}    /></p>
                </div>
                </div>
              )}
                
             
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Membership;
