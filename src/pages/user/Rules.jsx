import React, { useState, useRef } from 'react'
import JoditEditor from 'jodit-react';
import Avatar from '../../assets/Avatar.jpeg';
import { toastSuccess, toastWarn } from '../../utils/notifyCustom';
import "../../editor.css"
import editorConfig from '../../utils/joditCnf';
import { postApiWithFormdataTokenUseFetch } from '../../utils/api';
const Rules = () => {

  const editor = useRef(null);
  const [content, setContent] = useState('');
  
  const [formData, setFormData] = useState({
    title: "rules",
    content: "",
    url:"",
    images: null,
  });

  const [img, setImg] = useState({
    images: ''
  });

  const handleImagesUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImg((prevData) => ({
          ...prevData,
          images: reader.result // Update only the images field
        }));
      };
      reader.readAsDataURL(file);

      // Update the formData state correctly
      setFormData((prevFormData) => ({
        ...prevFormData,
        images: file // Update only the images field in formData
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
    const url = `${import.meta.env.VITE_URL}${import.meta.env.VITE_SETRULE}`
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("title", formData.title);
    formdata.append("content", formData.content);
    formdata.append("url", formData.url);

    if (formData.images) {
      formdata.append("images", formData.images);
    } else {
      console.error("Images field is not a valid File object.");
      return;
    }

    try {
      const result = await postApiWithFormdataTokenUseFetch(url, formdata)
      console.log(result);

      if (result.success) {
        toastSuccess("Saved Successfully");
        setFormData({
          content: "",
          url:"",
          images: null,
        });
      } else {
        toastWarn(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      toastWarn('An error occurred while saving data.');
    }
  };

  return (
    <div className='ms-60 max-sm:ms-0 max-md:ms-0 pb-6'>
      <div className='w-full '>
        <div className=' mx-3 bg-white rounded-md max-sm:mx-3 '>
          <div className='text-center  shadow-lg rounded-md mt-2 mb-1 py-4 '>
            <h1 className=' font-bold text-2xl text-[#16884d]'>Chess Rules</h1>
          </div>
        </div>
      </div>
      <div className='w-full '>
        <div className='flex flex-wrap mx-3 '>
          <div className='w-full mt-6 pl-1 max-sm:-ml-2 px-3 snap-y snap-mandatory'>
            <div className='relative flex flex-col  p-2 pb-6 h-full min-w-0 break-words bg-white border-0 shadow-xl rounded-md bg-clip-border'>
              <div className='text-center rounded-md bg-gray-300 '>
                <p className='text-2xl font-semibold py-2'>Rules</p>
              </div>

              <div className=' flex flex-wrap pt-4'>
             
                <div className='w-full lg:w-5/12 inline-flex items-center  justify-center '>
                  {/* <label className='  text-lg font-semibold bg-gray-300 py-1 px-2 rounded-md'> Image:</label> */}
                  <div className=" rounded-lg ">
                    <div className="my-2 mx-3 items-center justify-center">
                      {img.images ? (
                        <img src={img.images} alt="Uploaded" className="w-40 h-40" />
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
                <div className='w-full lg:w-4/12 max-sm:mt-4 inline-flex items-center  justify-center'>
                  {/* <label className='  text-lg font-semibold bg-gray-300 py-1 px-2 rounded-md'> Input Link:</label> */}
                  <input onChange={handleChange} type='text' placeholder='Input link' className='h-12 w-full  pl-1  border-2 rounded-md'></input>
                </div>




                {/* <div className='w-full  lg:w-3/12 max-sm:pt-4 mx-3 items-center justify-center '>
                     <label className=' text-lg font-semibold bg-gray-300 py-1 px-2 rounded-md'> Title:</label><br/>
                       <p type='text' className='text-xl px-3 text-cente w-full h-12 font-semibold border-2 rounded-md mt-2 py-2'></p>
                     </div> */}
              </div>
              <div className='w-full px-3 max-sm:pt-4'>
                   <div className='my-2 rounded-md' >
                   <JoditEditor
      ref={editor}
      value={content}
      config={editorConfig}
      // tabIndex={1} // tabIndex of textarea
      onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
      onChange={newContent => setContent(newContent)}
    />
                   </div>
                </div>
              <button onClick={handleSaveData} type='button' className=' text-left my-4 ml-3 pl-3 bg-green-600 hover:bg-green-500 h-[34px] w-20 rounded-md text-white font-semibold'>Submit</button>

              {/* <div className=''>
              <button type='button' className=' text-left my-4  ml-3 pl-3 bg-green-600 hover:bg-green-500 h-[34px] w-20 rounded-md text-white font-semibold'>Submit</button>

              </div> */}

            </div>
          </div>


        </div>

      </div>
      <div className='w-full overflow-y-auto mt-4 h-72'>
        <div className='flex flex-wrap mx-3 '>
          <div className='w-full  pl-1 max-sm:-ml-2 px-2'>
            <div className='relative flex flex-col  p-2 pb-6 h-full min-w-0 break-words bg-white border-0 shadow-xl rounded-md bg-clip-border'>
              <div className='text-center rounded-md bg-gray-300 '>
                <p className='text-2xl font-semibold py-2'>Rules</p>
              </div>
              <div className='flex flex-wrap pt-4 '>
                <div className='w-full px-3 max-sm:pt-4 lg:w-1/3'>
                  <label className='  text-lg font-semibold bg-gray-300 py-1 px-2 rounded-md'> Content:</label><br />
                  <textarea disabled placeholder='Text here...' className='h-40 w-full mt-2 pl-1 mr-6 border-2 rounded-md'></textarea>
                </div>
                <div className='w-full px-6 max-sm:pt-4 lg:px-16 lg:w-1/3'>
                  <label className='  text-lg font-semibold bg-gray-300 py-1 px-2 rounded-md'> Image:</label>
                  <img src={Avatar} alt='Avatar' className='mt-2 h-40 w-40  rounded-md object-cover' />

                </div>
                <div className='w-full  px-3 max-sm:pt-4 lg:w-1/3'>
                  <label className='  text-lg font-semibold bg-gray-300 py-1 px-2 rounded-md'> Input Link:</label>
                  <p type='text' className='h-12 w-full mt-2 pl-1  border-2 rounded-md'></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap mx-3'>
          <div className='w-full mt-2 pl-1 max-sm:-ml-2 px-2'>
            <div className='relative flex flex-col  p-2 pb-6 h-full min-w-0 break-words bg-white border-0 shadow-xl rounded-md bg-clip-border'>
              <div className='text-center rounded-md bg-gray-300 '>
                <p className='text-2xl font-semibold py-2'>Rules</p>
              </div>
              <div className='flex flex-wrap pt-4 '>
                <div className='w-full px-3 max-sm:pt-4 lg:w-1/3'>
                  <label className='  text-lg font-semibold bg-gray-300 py-1 px-2 rounded-md'> Content:</label><br />
                  <textarea disabled placeholder='Text here...' className='h-40 w-full mt-2 pl-1 mr-6 border-2 rounded-md'></textarea>
                </div>
                <div className='w-full px-6 max-sm:pt-4 lg:px-16 lg:w-1/3'>
                  <label className='  text-lg font-semibold bg-gray-300 py-1 px-2 rounded-md'> Content:</label>
                  <img src={Avatar} alt='Avatar' className='mt-2  h-40 w-40 rounded-md object-cover' />

                </div>
                <div className='w-full  px-3 max-sm:pt-4 lg:w-1/3'>
                  <label className='  text-lg font-semibold bg-gray-300 py-1 px-2 rounded-md'> Input Link:</label>
                  <p type='text' className='h-12 w-full mt-2 pl-1  border-2 rounded-md'></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rules
