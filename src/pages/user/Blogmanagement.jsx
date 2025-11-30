import React, {useState, useRef, useEffect} from 'react'
import JoditEditor from 'jodit-react';
import "../../editor.css"
import editorConfig from '../../utils/joditCnf';

const Blogmanagement = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
     
    const[formData, setFormData] = useState({
      title:"",
      blogimg:null
    });

    const [img, setImg] = useState({
      blogimg:'',
    });

    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImg((prevData) => ({
            ...prevData,
            blogimg: reader.result // Update only the images field
          }));
        };
        reader.readAsDataURL(file);

        setFormData((prevFormData) => ({
          ...prevFormData,
          blogimg: file // Update only the images field in formData
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
console.log(formData);

  return (
    <div className='ms-60 max-sm:ms-0 pb-6'>
      <div className='w-full'>
        <div className='mx-3 bg-white rounded-md max-sm:mx-3 '>
        <div className='text-center  shadow-lg rounded-md mt-2 mb-1 py-4 '>
            <h1 className=' font-bold text-2xl text-[#16884d]'>Blog Management</h1>
          </div>
        </div>
      </div>
      <div className='w-full'>
         <div className='flex flex-wrap mx-3'>
            <div className='w-full mt-6 pl-1 max-sm:-ml-2 px-2'>
                <div className='relative flex flex-col  p-2 pb-6 h-full min-w-0 break-words bg-white border-0 shadow-xl rounded-md bg-clip-border'>
                <div className='text-center rounded-md bg-gray-300 '>
                <p className='text-2xl font-semibold py-2'>Set Blog Details</p>
              </div>
                <div className='w-full flex flex-wrap pt-4'>
                    <div className='w-full lg:w-5/12 inline-flex items-center  justify-center'>
                    <div className=" rounded-lg ">
        <div className="my-2 mx-3 items-center justify-center">
          {img.blogimg ? (
            <img src={img.blogimg} alt="Uploaded" className="w-40 h-40" />
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
                    </div>
                    <div className='w-full lg:w-4/12 max-sm:mt-4 inline-flex items-center  justify-center'>
                  <input  type='text' placeholder='Type your title' className='h-12 w-full  pl-1  border-2 rounded-md'></input>
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
                <button  type='button' className=' text-left my-4 ml-3 pl-3 bg-green-600 hover:bg-green-500 h-[34px] w-20 rounded-md text-white font-semibold'>Submit</button>

                </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Blogmanagement
