import React from 'react'
import Avatar from '../../../assets/Avatar.jpeg';
const Gamelive = () => {
  return (
    <div>
      <div className="ms-60 max-sm:ms-0">
     <div className='w-full '>
        <div className=' mx-6 bg-white rounded-2xl max-sm:mx-3 '>
          <div className='text-center  shadow-lg rounded-2xl mt-2 mb-1 py-4 '>
            <h1 className=' font-bold text-2xl text-[#16884d]'>Live Game</h1>
          </div>
        </div>
      </div>
      <div className='w-full px-6 py-3 mx-auto'>
         {/* table      */}
          <div className='flex flex-wrap -mx-4'>
          <div className='flex-none w-full max-w-full px-3 max-sm:px-1'> 
          <div className=' flex flex-col  min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border'>
          <div className="p-4 pb-2 mb-0 mr-6 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                  <h6 className='font-semibold float-end text-white bg-gradient-to-tl rounded-sm bg-red-400 py- px-2 text-xl'>Live</h6>
                </div>
                <div className='flex-auto py-2 px-0 '>
                <div className='p-0 overflow-x-auto'>
                <table className='items-center w-full  mb-0 align-top border-gray-200 text-slate-500'>
                  <thead className='align-bottom'>
                    <tr>
                      <th className='text-center uppercase max-sm:text-xs border-t  py-3 pl-3'>Room ID
                      </th>
                      <th className='text-center uppercase max-sm:text-xs border-t  py-3 pl-4 '>Player 1
                      </th>
                      <th className='text-center uppercase max-sm:text-xs border-t px-2 py-3 pl-4  '>Player 2
                      </th>
                      </tr>
                      
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border-t border-gray-200 py-3 text-center'>1
                      </td>
                      <td className="p-1.5 align-middle bg-transparent border-t  max-sm:px-3 text-center  whitespace-nowrap">
                        <div className="flexpy-1">
                          <div>
                            <img
                              src={Avatar}
                              className="inline-flex items-center  justify-center ms-2 text-white transition-all duration-200 ease-soft-in-out text-sm h-6 w-6 rounded-full"
                              alt="xd"
                            /> <span>User1</span>
                          </div>
                         
                        </div>
                      </td>
                      <td className="p-1.5 align-middle bg-transparent border-t  max-sm:px-3 text-center  whitespace-nowrap">
                        <div className="flexpy-1">
                          <div>
                            <img
                              src={Avatar}
                              className="inline-flex items-center  justify-center ms-2 text-white transition-all duration-200 ease-soft-in-out text-sm h-6 w-6 rounded-full"
                              alt="xd"
                            /> <span>User2</span>
                          </div>
                         
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className='border-t border-gray-200 py-3 text-center'>2
                      </td>
                      <td className="p-1.5 align-middle bg-transparent border-t  max-sm:px-3 text-center  whitespace-nowrap">
                        <div className="flexpy-1">
                          <div>
                            <img
                              src={Avatar}
                              className="inline-flex items-center  justify-center ms-2 text-white transition-all duration-200 ease-soft-in-out text-sm h-6 w-6 rounded-full"
                              alt="xd"
                            /> <span>User1</span>
                          </div>
                         
                        </div>
                      </td>
                      <td className="p-1.5 align-middle bg-transparent border-t  max-sm:px-3 text-center  whitespace-nowrap">
                        <div className="flexpy-1">
                          <div>
                            <img
                              src={Avatar}
                              className="inline-flex items-center  justify-center ms-2 text-white transition-all duration-200 ease-soft-in-out text-sm h-6 w-6 rounded-full"
                              alt="xd"
                            /> <span>User2</span>
                          </div>
                         
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className='border-t border-gray-200 py-3 text-center'>3
                      </td>
                      <td className="p-1.5 align-middle bg-transparent border-t  max-sm:px-3 text-center  whitespace-nowrap">
                        <div className="flexpy-1">
                          <div>
                            <img
                              src={Avatar}
                              className="inline-flex items-center  justify-center ms-2 text-white transition-all duration-200 ease-soft-in-out text-sm h-6 w-6 rounded-full"
                              alt="xd"
                            /> <span>User1</span>
                          </div>
                         
                        </div>
                      </td>
                      <td className="p-1.5 align-middle bg-transparent border-t  max-sm:px-3 text-center  whitespace-nowrap">
                        <div className="flexpy-1">
                          <div>
                            <img
                              src={Avatar}
                              className="inline-flex items-center  justify-center ms-2 text-white transition-all duration-200 ease-soft-in-out text-sm h-6 w-6 rounded-full"
                              alt="xd"
                            /> <span>User2</span>
                          </div>
                         
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className='border-t border-gray-200 py-3 text-center'>4
                      </td>
                      <td className="p-1.5 align-middle bg-transparent border-t  max-sm:px-3 text-center  whitespace-nowrap">
                        <div className="flexpy-1">
                          <div>
                            <img
                              src={Avatar}
                              className="inline-flex items-center  justify-center ms-2 text-white transition-all duration-200 ease-soft-in-out text-sm h-6 w-6 rounded-full"
                              alt="xd"
                            /> <span>User1</span>
                          </div>
                         
                        </div>
                      </td>
                      <td className="p-1.5 align-middle bg-transparent border-t  max-sm:px-3 text-center  whitespace-nowrap">
                        <div className="flexpy-1">
                          <div>
                            <img
                              src={Avatar}
                              className="inline-flex items-center  justify-center ms-2 text-white transition-all duration-200 ease-soft-in-out text-sm h-6 w-6 rounded-full"
                              alt="xd"
                            /> <span>User2</span>
                          </div>
                         
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className='border-t border-gray-200 py-3 text-center'>4
                      </td>
                      <td className="p-1.5 align-middle bg-transparent border-t  max-sm:px-3 text-center  whitespace-nowrap">
                        <div className="flexpy-1">
                          <div>
                            <img
                              src={Avatar}
                              className="inline-flex items-center  justify-center ms-2 text-white transition-all duration-200 ease-soft-in-out text-sm h-6 w-6 rounded-full"
                              alt="xd"
                            /> <span>User1</span>
                          </div>
                         
                        </div>
                      </td>
                      <td className="p-1.5 align-middle bg-transparent border-t  max-sm:px-3 text-center  whitespace-nowrap">
                        <div className="flexpy-1">
                          <div>
                            <img
                              src={Avatar}
                              className="inline-flex items-center  justify-center ms-2 text-white transition-all duration-200 ease-soft-in-out text-sm h-6 w-6 rounded-full"
                              alt="xd"
                            /> <span>User2</span>
                          </div>
                         
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className='border-t border-gray-200 py-3 text-center'>4
                      </td>
                      <td className="p-1.5 align-middle bg-transparent border-t  max-sm:px-3 text-center  whitespace-nowrap">
                        <div className="flexpy-1">
                          <div>
                            <img
                              src={Avatar}
                              className="inline-flex items-center  justify-center ms-2 text-white transition-all duration-200 ease-soft-in-out text-sm h-6 w-6 rounded-full"
                              alt="xd"
                            /> <span>User1</span>
                          </div>
                         
                        </div>
                      </td>
                      <td className="p-1.5 align-middle bg-transparent border-t  max-sm:px-3 text-center  whitespace-nowrap">
                        <div className="flexpy-1">
                          <div>
                            <img
                              src={Avatar}
                              className="inline-flex items-center  justify-center ms-2 text-white transition-all duration-200 ease-soft-in-out text-sm h-6 w-6 rounded-full"
                              alt="xd"
                            /> <span>User2</span>
                          </div>
                         
                        </div>
                      </td>
                    </tr>
                    <tr className='border-y'>
                      <td className=' border-gray-200 py-3 text-center'>4
                      </td>
                      <td className="p-1.5 align-middle bg-transparent   max-sm:px-3 text-center  whitespace-nowrap">
                        <div className="flexpy-1">
                          <div>
                            <img
                              src={Avatar}
                              className="inline-flex items-center  justify-center ms-2 text-white transition-all duration-200 ease-soft-in-out text-sm h-6 w-6 rounded-full"
                              alt="xd"
                            /> <span>User1</span>
                          </div>
                         
                        </div>
                      </td>
                      <td className="p-1.5 align-middle bg-transparent  max-sm:px-3 text-center  whitespace-nowrap">
                        <div className="flexpy-1">
                          <div>
                            <img
                              src={Avatar}
                              className="inline-flex items-center  justify-center ms-2 text-white transition-all duration-200 ease-soft-in-out text-sm h-6 w-6 rounded-full"
                              alt="xd"
                            /> <span>User2</span>
                          </div>
                         
                        </div>
                      </td>
                    </tr>
                  </tbody>
                    
                </table>
                </div>
                
                </div>
          </div>

          </div>

     </div>
           
     </div>
    
    
    </div>
    </div>
  )
}

export default Gamelive

