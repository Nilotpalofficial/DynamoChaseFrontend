import React, { useState } from 'react'
import banner from '../assets/user_images/home-decor-1.jpg'
import Select from 'react-dropdown-select';

const AddProduct = () => {
  const [selectedImages, setSelectedImages] = useState([null, null, null, null,]);
  const [img, setimg] = useState([])
  const fileInputRef = React.createRef();
  const handleFileChange = (index, e) => {
    const file = e.target.files[0];
    setimg((prevImg) => [...prevImg, file]);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const newImages = [...selectedImages];
        newImages[index] = reader.result; // Use reader.result instead of e.target.result
        setSelectedImages(newImages);
      };
      reader.readAsDataURL(file);
    }
  };


  // dropdown form section
  const [selectedOption, setSelectedOption] = useState({});
  const options = [

    { value: 's', label: 's' },
    { value: 'xs', label: 'xs' },
    { value: 'l', label: 'l' },
    { value: 'xl', label: 'xl' },
    { value: '2xl', label: '2xl' }
  ];
  // end dropdown form section

  console.log(selectedOption, "==============")
  return (

    // banner
    <div className=' ms-60'>
      <div className='w-full my-4 h-44 mt-5 mb-1 '  >
        <div className='my-mb-1 h-44 mx-3' style={{ background: `url(${banner}) center/cover` }}></div>
      </div>
      {/* end banner */}

      {/* add product button banner  */}
      <div className='w-full   '  >
        <div className=' mx-3 bg-white'>
          <div className='flex justify-between shadow-lg mt-5 mb-1 py-4 '>
            <h1 className='ms-12 font-bold'>Add Product</h1>
            <div className='me-10'>  <button type="submit" className="bg-gradient-to-tl from-purple-700 to-pink-500 text-white font-bold py-1 px-5 rounded ">Add product</button></div>
          </div>
        </div>
      </div>
      {/* end product button banner */}


      {/* form section */}
      <div className='flex flex-wrap mb-3'>
        <div className=' mx-3 w-screen'>
          <div className='text-black    w-full '>
            <form className=''>
              <fieldset className=' p-5 m-6 mt-0 '>
                <div className='flex flex-wrap'>
                  <div className='w-2/6'>
                    <div className='  rounded-lg '>
                      {/* product name section */}
                      <div className='bg-white pe-5 m-5 mt-1 rounded-lg'>
                        {/* product name */}
                        <label htmlFor="productName" className='block mx-2'>Product Name:</label>
                        <input type="text" id="productName" name="productName" placeholder="product name type here..." className='w-full rounded-lg bg-gray-200 mx-3 my-2 py-2 px-2' />
                        {/* product description */}
                        <label htmlFor="description" className=' block mx-2'>Description:</label>
                        <textarea name="" id="" cols="30" rows="3" placeholder='product description type here' className='w-full rounded-lg mx-3 my-2 py-2 px-2 bg-gray-200'></textarea>
                      </div>
                      {/* end product name section */}

                      {/* price and selling price section */}
                      <div>
                        <div className=' bg-white m-5 p-5 rounded-lg'>
                          <div className='flex ms-4 '>
                            <label htmlFor="productPrice" className=' my-3'>Price:</label>
                            <input type="text" id="productPrice" name="productPrice" placeholder="product name type here..." className='w-full rounded-lg bg-gray-200 mx-3 my-2 py-2 px-2' />

                          </div>
                          <div className='flex '>
                            <div className='w-1/2 mx-2'>
                              <label htmlFor="sellingPrice" className='mx-2'>Selling Price:</label>
                              <input type="text" id="sellingPrice" name="sellingPrice" placeholder="product name type here..." className='w-full rounded-lg bg-gray-200 mx-3 my-2 py-2 px-2' />
                            </div>
                            <div className='w-1/2 mx-2'>
                              <label htmlFor="sellingPrice" className=' mx-2'>Discount:</label>
                              <input type="text" id="sellingPrice" name="sellingPrice" placeholder="product name type here..." className='w-full rounded-lg bg-gray-200  my-2 py-2 px-2' />
                            </div>
                          </div>

                        </div>

                      </div>
                      {/* end price and selling price section */}

                    </div>

                  </div>

                  <div className='w-4/6'>
                    {/* images section */}
                    <div className='bg-white m-5 p-5  mt-1 rounded-lg'>
                      {/* image upload */}
                      <h5 className="mx-2">Uplode Image</h5>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-4">
                        {selectedImages.map((image, index) => (
                          <div key={index} className="flex items-center justify-center  ">
                            <label
                              htmlFor={`dropzone-file-${index}`}
                              className="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-100 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100 "
                            >
                              {image ? (
                                <img src={image} alt={`Selected ${index}`} className="w-full h-full object-cover rounded-lg" />
                              ) : (
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                  <svg
                                    className="w-8 h-8 mb-4 text-gray-500 "
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 16"
                                  >
                                    <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                    />
                                  </svg>
                                </div>
                              )}
                              <input
                                id={`dropzone-file-${index}`}
                                type="file"
                                className="hidden"
                                ref={fileInputRef}
                                onChange={(e) => handleFileChange(index, e)}
                              />
                            </label>
                          </div>
                        ))}
                      </div>
                      {/* end image section */}
                    </div>
                    {/* end images section */}



                    {/* category section */}
                    <div className='bg-white m-5 px-5 py-3 rounded-lg mt-6'>
                      {/* product catagory */}
                      <label htmlFor="description" className=' block mx-2 capitalize'>product category:</label>
                      <select name="" id="" className='text-slate-600 block  w-full mx-3 my-2 py-2 px-2 capitalize bg-gray-200 rounded-lg'>
                        <option value="">product category 1</option>
                        <option value="">product category 1</option>
                        <option value="">product category 1</option>
                      </select>
                      {/* product sub-catagory */}
                      <label htmlFor="description" className=' block mx-2 capitalize'>product sub-Category:</label>
                      <select name="" id="" className='block text-slate-600 w-full mx-3 my-2 py-2 px-2 capitalize bg-gray-200 rounded-lg'>
                        <option value="">product sub-category-1</option>
                        <option value="">product sub-category-2</option>
                        <option value="">product sub-category-3</option>
                      </select>
                    </div>
                    {/* end  of category section  */}
                  </div>

                </div>
                <div className='flex flex-wrap'>
                  <div className='w-1/3'>
                    {/* price and selling price section */}
                    <div>
                      <div className=' bg-white m-5 mt-1  p-5 rounded-lg'>
                        <div>
                          <div>
                            <h1>Select Tag</h1>
                            <Select multi clearable searchable addPlaceholder='+add' keepSelectedInList options={options} onChange={(values) => setSelectedOption(values)} />

                          </div>
                        </div>

                      </div>

                    </div>
                    {/* end price and selling price section */}

                  </div>

                  <div className='w-1/3'>
                    {/* select color section */}
                    <div>
                      <div className=' bg-white m-5 mt-1 p-5 rounded-lg'>
                        <div>
                          <div>
                            <h1>Select Color</h1>
                            <Select multi clearable searchable addPlaceholder='+add' keepSelectedInList options={options} onChange={(values) => setSelectedOption(values)} />

                          </div>
                        </div>

                      </div>

                    </div>
                    {/* end select color section */}
                  </div>
                  <div className='w-1/3'>
                    {/* select size section */}
                    <div>
                      <div className=' bg-white m-5 mt-1 p-5 rounded-lg'>
                        <div>
                          <div>
                            <h1>Select size</h1>
                            <Select multi clearable searchable addPlaceholder='+add' keepSelectedInList options={options} onChange={(values) => setSelectedOption(values)} />

                          </div>
                        </div>

                      </div>

                    </div>
                    {/* end select size section */}
                  </div>

                </div>

              </fieldset>
            </form>
          </div>
        </div>



      </div>
    </div>

  )
}

export default AddProduct