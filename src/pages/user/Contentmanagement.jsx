import React, { useState, useRef, useMemo, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import { useQuery } from 'react-query';
import { getApi, postApiWithFormdata, postApiWithFormdataToken, postApiWithFormdataTokenUseFetch } from '../../utils/api';
import { toastSuccess, toastWarn } from '../../utils/notifyCustom';
import Uploadfile from '../../components/Uploadfile';
import Avatar from '../../assets/Avatar.jpeg';
import LoadingBar from "react-top-loading-bar";
import "../../editor.css"
import editorConfig from '../../utils/joditCnf';

const Contentmanagement = () => {
  const loadingBar = useRef(null);
  const editor = useRef(null);
  const [content, setContent] = useState('');

  const [formData, setFormData] = useState({
    title: "",
    content: "",
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

  console.log(formData, "fffffffffffff");




  const url = `${import.meta.env.VITE_URL}${import.meta.env.VITE_GETRULE}/getAll`;
  const queryGetAllContent = useQuery("getAllContent", () => getApi(url),);


  console.log(queryGetAllContent.data?.data?.data, "hhhhhhhhhhhhhhh");

  // loading
  const startLoading = () => {
    loadingBar.current.continuousStart();
  };
  const finishLoading = () => {
    loadingBar.current.complete();
  };
  useEffect(() => {
    if (queryGetAllContent.isLoading) {
      startLoading();
    } else {
      finishLoading();
    }
  }, [queryGetAllContent.isLoading]);


  return (
    <div className='ms-60 max-sm:ms-0 pb-6'>
      <LoadingBar color="#F11946" ref={loadingBar} />
      <div className='w-full '>
        <div className=' mx-3 bg-white rounded-md max-sm:mx-3 '>
          <div className='text-center  shadow-lg rounded-md mt-2 mb-1 py-4 '>
            <h1 className=' font-bold text-2xl text-[#16884d]'>Chess Pieces</h1>
          </div>
        </div>
      </div>
      {/* content section */}
      <div className='w-full'>
        <div className='flex flex-wrap mx-3 '>
          <div className='w-full mt-6 pl-1 max-sm:-ml-2 px-2 snap-y snap-mandatory'>
            <div className='relative flex flex-col  p-2 h-full min-w-0 break-words bg-white border-0 shadow-xl rounded-md bg-clip-border'>
              <div className='text-center rounded-md bg-gray-300 '>
                <p className='text-2xl font-semibold py-2'>Chose Chess Men</p>
              </div>

              <div className=' flex flex-wrap pt-4 '>
                <div className='w-full lg:w-5/12 inline-flex items-center  justify-center'>
                  {/* <label className='mx-3  text-lg font-semibold bg-gray-300 py-1 px-2 rounded-md'>Upload images:</label> */}
                  <div className="rounded-lg ">
                    <div className="my-2  ">
                      {img.images ? (
                        <img src={img.images} alt="Uploaded" className="w-40 h-40" />
                      ) : (
                        <div className="w-40 h-40 bg-lime-200 rounded-md flex ">
                          <span className="text-black inline-flex items-center  justify-center pl-1">No images Uploaded</span>
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


                <div className='w-full lg:w-4/12 max-sm:mt-4 inline-flex items-center  justify-center'>
                  {/* <label className='text-lg font-semibold bg-gray-300 py-1 px-2 rounded-md'>Choose Title:</label><br /> */}
                  <select
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className='text-sm px-1 text-center w-full overflow-x-auto font-semibold border-2 rounded-md py-2 '
                  >
                    <option >Choose Chess Pieces</option>
                    <option>Introducing the Dynamo Chess Game</option>
                    <option>The Missile/Dynamo - Two Dynamos / Missiles per side at the beginning</option>
                    <option>The Rook - Two Rooks per side at the beginning</option>
                    <option>The Knight - Two Knights per side at the beginning</option>
                    <option>The Bishop - Two Bishops per side at the beginning</option>
                    <option>The Queen - One and Only per side at the beginning</option>
                    <option>The King - One and Only per side</option>
                    <option>The Pawn - Ten Pawns per side</option>
                    <option>En-passant</option>
                    <option>The Castling</option>
                    <option>History & Preamble of Dynamo Chess</option>
                  </select>
                </div>

              </div>
              <div className='w-full px-3 max-sm:pt-4'>
                {/* <label className='text-lg font-semibold bg-gray-300 py-1 mb-2 px-2 rounded-md'>Write Content:</label><br /> */}
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
              {/* <JoditEditor
      ref={editor}
      value={content}
      // config={config}
      tabIndex={1} // tabIndex of textarea
      onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
      onChange={newContent => setContent(newContent)}
    /> */}
              <button onClick={handleSaveData} type='button' className=' text-left my-4 ml-3 pl-3 bg-green-600 hover:bg-green-500 h-[34px] w-20 rounded-md text-white font-semibold'>Submit</button>
            </div>

          </div>
        </div>
      </div>
      <div className='w-full '>
        <div className='flex flex-wrap mx-3 '>
          <div className='w-full mt-6 pl-1 max-sm:-ml-2 px-2'>
            <div className='relative flex flex-col  p-2 pb-6 h-full min-w-0 break-words bg-white border-0 shadow-xl rounded-md bg-clip-border'>
              <div className='text-center rounded-md bg-gray-300 '>
                <p className='text-2xl font-semibold py-2'> Chess Men</p>
              </div>
              {queryGetAllContent.data?.data?.data.map((content, index) => (
                <div key={index} className='flex flex-wrap pt-4'>
                  <div className='w-full lg:w-3/12 px-3'>
                    <label className='text-lg font-semibold bg-gray-300 py-1 px-2 rounded-md'>Images:</label>
                    <img src={content?.images ? content.images[0] : ''} alt='Avatar' className='mt-2 w-7/12 rounded-md object-cover' />
                  </div>

                  <div className='w-full px-3 max-sm:pt-4 lg:w-5/12'>
                    <label className='text-lg font-semibold bg-gray-300 py-1 px-2 rounded-md'>Content:</label><br />
                    <p disabled className='w-full mt-1 overflow-y-auto h-36 border-2 p-2 rounded-md'><div className='custom-content text-black'  dangerouslySetInnerHTML={{ __html: content.content }}  /></p>
                    </div>

                  <div className='w-full lg:w-3/12 max-sm:pt-4 px-3 items-center justify-center'>
                    <label className='text-lg font-semibold bg-gray-300 py-1 px-2 rounded-md'>Title:</label><br />
                    <p disabled className='text-base px-3 text-center overflow-y-auto w-full h-16 font-semibold border-2 rounded-md mt-2 py-2'>{content.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contentmanagement;
