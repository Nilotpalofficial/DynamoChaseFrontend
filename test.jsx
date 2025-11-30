import React,{useState} from 'react'
import Uploadfile from '../../components/Uploadfile'
import Avatar from '../../assets/Avatar.jpeg';
const Contentmanagement = () => {
 
  const [selectedImage, setSelectedImage] = useState(null);
  
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className='ms-60 max-sm:ms-0 pb-6'>
      <div className='w-full '>
        <div className=' mx-3 bg-white rounded-2xl max-sm:mx-3 '>
          <div className='text-center  shadow-lg mt-2 mb-1 py-4 '>
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

                    <div className=' flex flex-wrap pt-4'>
                        <div className='w-full lg:w-3/12'>
                          <label className='mx-3  text-lg font-semibold bg-gray-300 py-1 px-2 rounded-md'>Upload Image:</label>
                          <div className="flex flex-col items-center justify-center p-1 mt-2 mx-3 border rounded-md">
      
      {selectedImage && (
        <img
          src={selectedImage}
          alt="Preview"
          className="mb-4 w-32 h-32 rounded-md object-cover"
        />
      )}
      <input
        type="file"
        onChange={handleImageChange}
        className="block mb-2 text-xs  text-gray-500 file:mr-2 file:py-1 file:ml-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
      <button className="px-2 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-700">
        Upload
      </button>
    </div>
                        </div>
                    
                
                   
                    <div className='w-full mx-3 max-sm:pt-4 lg:w-5/12 '>
                        <label className='  text-lg font-semibold bg-gray-300 py-1 px-2 rounded-md'>Write Content:</label><br/>
                       <textarea placeholder='Text here...'  className='h-40 w-full mt-2 pl-1 mr-6 border-2 rounded-md'></textarea>
                    </div>
                     <div className='w-full  lg:w-3/12 max-sm:pt-4 mx-3  items-center justify-center'>
                     <label className=' text-lg font-semibold bg-gray-300 py-1 px-2 rounded-md'>Chose title:</label><br/>
                        <select className='text-xl px-3 text-cente w-full font-semibold border-2 rounded-md mt-2 py-2'>
                            <option className='bg-white hover:bg-white'>Chose Chess Pieces</option>
                            <option>The Missile</option>
                            <option>The Rook</option>
                            <option>The Knight</option>
                            <option>The Knight</option>
                            <option>The Knight</option>
                            <option>The Knight</option>
                            <option>The Knight</option>
                        </select>
                     </div>
                    </div>
                    <button type='button' className=' text-left my-4 ml-3 pl-3 bg-green-600 hover:bg-green-500 h-[34px] w-20 rounded-md text-white font-semibold'>Submit</button>
              </div>
          </div>
         

      </div>

      </div>
      <div className='w-full '>
      <div className='flex flex-wrap mx-3 '>
          <div className='w-full mt-6 pl-1  px-2'>
              <div className='relative flex flex-col  p-2 pb-6 h-full min-w-0 break-words bg-white border-0 shadow-xl rounded-md bg-clip-border'>
                    <div className='text-center rounded-md bg-gray-300 '>
                         <p className='text-2xl font-semibold py-2'> Chess Men</p>  
                    </div>

                    <div className=' flex flex-wrap pt-4'>
                        <div className='w-full lg:w-3/12 mx-3  '>
                          <label className='  text-lg font-semibold bg-gray-300 py-1 px-2 rounded-md'> Image:</label>
                        <img src={Avatar} alt='Avatar' className='mt-2 w-7/12  rounded-md'/>
                        </div>
                    
                
                   
                    <div className='w-full mx-3 max-sm:pt-4 lg:w-5/12 '>
                        <label className='  text-lg font-semibold bg-gray-300 py-1 px-2 rounded-md'> Content:</label><br/>
                       <p   className='h-40 w-full mt-2 pl-1 mr-6 border-2 rounded-md'></p>
                    </div>
                     <div className='w-full  lg:w-3/12 max-sm:pt-4 mx-3 items-center justify-center '>
                     <label className=' text-lg font-semibold bg-gray-300 py-1 px-2 rounded-md'> Title:</label><br/>
                       <p type='text' className='text-xl px-3 text-cente w-full h-12 font-semibold border-2 rounded-md mt-2 py-2'></p>
                     </div>
                    </div>
              </div>
          </div>
         

      </div>

      </div>
    </div>
  )
}

export default Contentmanagement
