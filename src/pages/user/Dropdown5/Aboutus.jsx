import React,{useState,useEffect, useRef} from 'react'
import Avatar from '../../../assets/Avatar.jpeg';
import JoditEditor from 'jodit-react';
import "../../../editor.css"
import editorConfig from '../../../utils/joditCnf';
import LoadingBar from 'react-top-loading-bar';
import { toastSuccess, toastWarn } from '../../../utils/notifyCustom';
import {getApi, postApiWithFormdata, postApiWithFormdataTokenUseFetch } from '../../../utils/api';
import { useQuery } from 'react-query';

const Aboutus = () => {
  const loadingBar = useRef(null);
    const editor = useRef(null);
    const [content, setContent] = useState('');

    const[formData, setFormData] = useState({
      title:"",
      aboutimg:null
    });

    const [img, setImg] = useState({
      aboutimg: ''
    });

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setImg((prevdata) => ({
              ...prevdata,  
              aboutimg: reader.result 
            }));
          };
          reader.readAsDataURL(file);
          setFormData((prevFormData) => ({
            ...prevFormData,
            aboutimg: file // Update only the images field in formData
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
        const url = `${import.meta.env.VITE_URL}${import.meta.env.VITE_SETABOUTUS}`
        e.preventDefault();
    
        const formdata = new FormData();
        formdata.append("title", formData.title);
        formdata.append("content", content);
    
        if (formData.images) {
          formdata.append("images", formData.images);
        } 
        // else {
        //   console.error("Images field is not a valid File object.");
        //   return;
        // }
    
        try {
          const result = await postApiWithFormdataTokenUseFetch(url, formdata)
          console.log(result);
    
          if (result.success) {
            toastSuccess("Saved Successfully");
    
            setFormData({
              title: "",
              content: "",
              images: null,
            });
            setImg(
              { images: '' }
            )
            setContent('')
            console.log("vvvvvvvv", formdata);
          } else {
            toastWarn(result.message);
          }
        } catch (error) {
          console.error('Error:', error);
          toastWarn('An error occurred while saving data.');
        }
      };
      console.log(formData, "ggggggggggggg");

      const url = `${import.meta.env.VITE_URL}${import.meta.env.VITE_GETABOUTUS}`;
      const getSelected = {
        "title": [
            "About Us",
            "Our Story",
        ]
    }
      const queryGetselectedContent = useQuery("getselectedContent", () => postApiWithFormdata(url,getSelected),);
    
    
      console.log(queryGetselectedContent.data?.data?.data, "hhhhhhhhhhhhhhh");
    
      // loading
      const startLoading = () => {
        loadingBar.current.continuousStart();
      };
      const finishLoading = () => {
        loadingBar.current.complete();
      };
      useEffect(() => {
        if (queryGetselectedContent.isLoading) {
          startLoading();
        } else {
          finishLoading();
        }
      }, [queryGetselectedContent.isLoading]);
      
  return (
    <div>
       <div className='ms-60 max-sm:ms-0 pb-6'>
       <LoadingBar color="#F11946" ref={loadingBar} />
      <div className='w-full'>
        <div className='mx-3 bg-white rounded-md max-sm:mx-3 '>
        <div className='text-center  shadow-lg rounded-md mt-2 mb-1 py-4 '>
            <h1 className=' font-bold text-2xl text-[#16884d]'>About Us</h1>
          </div>
        </div>
      </div>
      <div className='w-full'>
         <div className='flex flex-wrap mx-3'>
            <div className='w-full mt-6 pl-1 max-sm:-ml-2 px-2'>
                <div className='relative flex flex-col  p-2 pb-6 h-full min-w-0 break-words bg-white border-0 shadow-xl rounded-md bg-clip-border'>
                <div className='text-center rounded-md bg-gray-300 '>
                <p className='text-2xl font-semibold py-2'>Set About Us Details</p>
              </div>
                <div className='w-full flex flex-wrap pt-4'>
                    {/* <div className='w-full lg:w-5/12 inline-flex items-center  justify-center'>
                    <div className=" rounded-lg ">
        <div className="my-2 mx-3 items-center justify-center">
          {img.images ? (
            <img src={img. images} alt="Uploaded" className="w-40 h-40" />
          ) : (
            <div className="w-40 h-40 bg-lime-200 rounded-md flex items-center justify-center">
              <span className="text-black">No Image Uploaded</span>
            </div>
          )}
        </div>
        <input
          type="file"
          accept="file/*"
          onChange={handleImageUpload}
          className="block w-full text-xs text-gray-500
            file:mx-3 file:py-1
            file:rounded-full file:border-0
            file:text-xs file:font-semibold
            file:bg-green-100 file:text-green-700
            hover:file:bg-blue-100"
        />
      </div> 
                    </div> */}
                    <div className='w-full lg:w-4/12 max-sm:mt-4 inline-flex items-center  justify-center'>
                     <select 
                      name="title"
                   value={formData.title}
                    onChange={handleChange}
                    className='text-sm px-1 text-center w-full overflow-x-auto font-semibold border-2 rounded-md py-2 '
                     >
                          <option>Select option</option>
                          <option>About Us</option>
                          <option>Our Story</option>
                     </select>
                </div>
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
                <button onClick={handleSaveData}  type='button' className=' text-left my-4 ml-3 pl-3 bg-green-600 hover:bg-green-500 h-[34px] w-20 rounded-md text-white font-semibold'>Submit</button>

                </div>
            </div>
         </div>
      </div>
      <div className='w-full'>
          <div className='flex flex-wrap mx-3'>
            <div className='w-full mt-6 pl-1 max-sm:mx-2 px-2'>
              <div className='relative flex flex-col p-2 pb-6 h-full min-w-0 break-words bg-white border-0 shadow-xl rounded-md bg-clip-border'>
                <div className='text-center rounded-md bg-gray-300'>
                  <p className='text-2xl font-semibold py-2'>About Us Details</p>
                </div>
               
             {queryGetselectedContent.data?.data?.data.map((content, index)=>(
              <div key={index} className='w-full flex flex-wrap'>
                  {/* <div className=' w-full lg:w-1/2  p-4 px-6 inline-flex items-center justify-center'>
                  <img src={content?.images ? content.images[0] : ''} alt='Avatar' className='mt-2 h-40 w-40  rounded-md object-cover' />

                  </div> */}
                  <div className='w-full lg:w-1/2 p-4 inline-flex items-center justify-center'>
                    <div className='w-full lg:px-6 px-2 flex'>
                    <p className='text-lg p-1 h-10 text-center max-sm:w-full w-3/4 overflow-x-auto font-semibold border-2 rounded-md py-2'>{content.title}</p>
                    </div>
                  </div>
                
                <div className='w-full px-3 max-sm:pt-4'> 
                <p disabled className='w-full border-2 p-2 rounded-md'><div className='custom-content text-black'   dangerouslySetInnerHTML={{ __html:content.content  }}    /></p>
                </div>
                </div>
             ))}
            
                
             
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Aboutus
