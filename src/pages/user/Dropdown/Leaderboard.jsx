import React from 'react'

const Leaderboard = () => {
  return (
    <div>
    <div className='w-full px-6 py-4 mx-auto'>
        <div className='flex flex-wrap -mx-3'>
        <div className='flex-none w-full max-w-full px-3 max-sm:px-1'>
        <div className=' flex flex-col  min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border'>
        <div className="p-4 pb-2 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                  <h6 className='font-bold text-[#16884d] text-2xl'>Leaderboard</h6>
                </div>
                <div className='flex-auto px-0 py-2'>
                  <div className='p-0 overflow-x-auto'>
                    <table className='items-center w-full  mb-0 align-top border-gray-200 text-slate-500'>
                    <thead className='align-bottom'>
                    <tr>
                      <th className='text-center uppercase text-sm max-sm:text-xs border-t  py-3 '>Rank
                      </th>
                      <th className='text-center uppercase text-sm max-sm:text-xs border-t px-2 py-3 '>Players Name
                      </th>
                      <th className='text-center text-sm max-sm:text-center    uppercase align-middle max-sm:text-xs py- border-t'> Mail id
                      </th>
                      <th className='text-center text-sm uppercase max-sm:text-xs py-3 px-2 border-t'> Time duration
                      </th>
                      <th className='text-center text-sm uppercase max-sm:text-xs py-3 px-2 border-t'>points
                      </th>
                      <th className='text-center text-sm uppercase max-sm:text-xs py-3 px-2 border-t'>Winning Amount
                      </th>
                     
                    </tr>
                    
                  </thead>
                  <tbody>
                    <tr>
                      <td className='text-center  max-sm:text-xs border-t font-semibold text-[#16884d] py-2 px-2'>
                        <span>#1</span>
                        
                      </td>
                      <td className='border-t py-2 text-center px-2 font-semibold max-sm:text-xs'>
                        <span>User1</span>
                      </td>
                      <td className='border-t text-center py-2 text-sm max-sm:px-3 max-sm:text-xs align-middle font-semibold'>
                        <span >User1@gmail.com</span>
                      </td>
                      <td className='border-t py-2 text-center px-2 font-semibold max-sm:text-xs'>
                        <span>30m 25s</span>
                      </td>
                      <td className='border-t py-2 text-center px-2'>
                        <span className=' bg-gradient-to-tl from-green-600 to-lime-400 py-1 px-2 rounded-md text-white font-semibold'>12</span>
                      </td>
                      <td className='border-t py-2 text-center text-[#16884d] max-sm:text-xs font-bold px-2'>
                        <span >You Won ₹1200</span>
                      </td>
                     </tr>
                     <tr>
                      <td className='text-center  max-sm:text-xs border-t font-semibold text-[#16884d] py-2 px-2'>
                        <span>#2</span>
                        
                      </td>
                      <td className='border-t py-2 text-center px-2 font-semibold max-sm:text-xs'>
                        <span>User2</span>
                      </td>
                      <td className='border-t text-center py-2 text-sm max-sm:px-3 max-sm:text-xs align-middle font-semibold'>
                        <span >User2@gmail.com</span>
                      </td>
                      <td className='border-t py-2 text-center px-2 font-semibold max-sm:text-xs'>
                        <span>31m 25s</span>
                      </td>
                      <td className='border-t py-2 text-center px-2'>
                        <span className=' bg-gradient-to-tl from-green-600 to-lime-400 py-1 px-2 rounded-md text-white font-semibold'>11</span>
                      </td>
                      <td className='border-t py-2 text-center text-[#16884d] max-sm:text-xs font-bold px-2'>
                        <span >You Won ₹600</span>
                      </td>
                     </tr>
                     <tr>
                      <td className='text-center  max-sm:text-xs border-t font-semibold text-[#16884d] py-2 px-2'>
                        <span>#3</span>
                        
                      </td>
                      <td className='border-t py-2 text-center px-2 font-semibold max-sm:text-xs'>
                        <span>User3</span>
                      </td>
                      <td className='border-t text-center py-2 text-sm max-sm:px-3 max-sm:text-xs align-middle font-semibold'>
                        <span >User3@gmail.com</span>
                      </td>
                      <td className='border-t py-2 text-center px-2 font-semibold max-sm:text-xs'>
                        <span>30m 25s</span>
                      </td>
                      <td className='border-t py-2 text-center px-2'>
                        <span className=' bg-gradient-to-tl from-green-600 to-lime-400 py-1 px-2 rounded-md text-white font-semibold'>11</span>
                      </td>
                      <td className='border-t py-2 text-center text-[#16884d] max-sm:text-xs font-bold px-2'>
                        <span >You Won ₹300</span>
                      </td>
                     </tr>
                     <tr>
                      <td className='text-center  max-sm:text-xs border-t  py-2 px-2'>
                        <span>#4</span>
                        
                      </td>
                      <td className='border-t py-2 text-center px-2 max-sm:text-xs'>
                        <span>User4</span>
                      </td>
                      <td className='border-t text-center py-2 text-sm max-sm:px-3 max-sm:text-xs align-middle '>
                        <span >User4@gmail.com</span>
                      </td>
                      <td className='border-t py-2 text-center px-2 max-sm:text-xs'>
                        <span>31m 25s</span>
                      </td>
                      <td className='border-t py-2 text-center px-2'>
                        <span className=' bg-gradient-to-tl bg-[#dddd23] py-1 px-2 rounded-md text-white font-semibold'>11</span>
                      </td>
                      <td className='border-t py-2 text-center text-[#dddd23] max-sm:text-xs font-bold px-2'>
                        <span >You Won ₹000</span>
                      </td>
                     </tr>
                     <tr>
                      <td className='text-center  max-sm:text-xs border-t  py-2 px-2'>
                        <span>#5</span>
                        
                      </td>
                      <td className='border-t py-2 text-center px-2 max-sm:text-xs '>
                        <span>User5</span>
                      </td>
                      <td className='border-t text-center py-2 text-sm max-sm:px-3 max-sm:text-xs align-middle '>
                        <span >User5@gmail.com</span>
                      </td>
                      <td className='border-t py-2 text-center px-2 max-sm:text-xs '>
                        <span>31m 25s</span>
                      </td>
                      <td className='border-t py-2 text-center px-2'>
                        <span className=' bg-gradient-to-tl bg-[#dddd23] py-1 px-2 rounded-md text-white font-semibold'>11</span>
                      </td>
                      <td className='border-t py-2 text-center text-[#dddd23] max-sm:text-xs font-bold px-2'>
                        <span >You Won ₹000</span>
                      </td>
                     </tr>
                     <tr>
                      <td className='text-center  max-sm:text-xs border-t  py-2 px-2'>
                        <span>#6</span>
                        
                      </td>
                      <td className='border-t py-2 text-center px-2 max-sm:text-xs '>
                        <span>User6</span>
                      </td>
                      <td className='border-t text-center py-2 text-sm max-sm:px-3 max-sm:text-xs align-middle '>
                        <span >User5@gmail.com</span>
                      </td>
                      <td className='border-t py-2 text-center px-2 max-sm:text-xs'>
                        <span>31m 25s</span>
                      </td>
                      <td className='border-t py-2 text-center px-2'>
                        <span className=' bg-gradient-to-tl bg-[#dddd23] py-1 px-2 rounded-md text-white font-semibold'>11</span>
                      </td>
                      <td className='border-t py-2 text-center text-[#dddd23] max-sm:text-xs font-bold px-2'>
                        <span >You Won ₹000</span>
                      </td>
                     </tr>
                     <tr>
                      <td className='text-center  max-sm:text-xs border-t  py-2 px-2'>
                        <span>#7</span>
                        
                      </td>
                      <td className='border-t py-2 text-center px-2 max-sm:text-xs '>
                        <span>User7</span>
                      </td>
                      <td className='border-t text-center py-2 text-sm max-sm:px-3 max-sm:text-xs align-middle '>
                        <span >User7@gmail.com</span>
                      </td>
                      <td className='border-t py-2 text-center px-2 max-sm:text-xs'>
                        <span>31m 25s</span>
                      </td>
                      <td className='border-t py-2 text-center px-2'>
                        <span className=' bg-gradient-to-tl bg-[#dddd23] py-1 px-2 rounded-md text-white font-semibold'>11</span>
                      </td>
                      <td className='border-t py-2 text-center text-[#dddd23] max-sm:text-xs font-bold px-2'>
                        <span >You Won ₹000</span>
                      </td>
                     </tr>
                     <tr>
                      <td className='text-center  max-sm:text-xs border-t  py-2 px-2'>
                        <span>#8</span>
                        
                      </td>
                      <td className='border-t py-2 text-center px-2 max-sm:text-xs'>
                        <span>User8</span>
                      </td>
                      <td className='border-t text-center py-2 text-sm max-sm:px-3 max-sm:text-xs align-middle '>
                        <span >User8@gmail.com</span>
                      </td>
                      <td className='border-t py-2 text-center px-2 max-sm:text-xs'>
                        <span>31m 25s</span>
                      </td>
                      <td className='border-t py-2 text-center px-2'>
                        <span className=' bg-gradient-to-tl bg-[#dddd23] py-1 px-2 rounded-md text-white font-semibold'>11</span>
                      </td>
                      <td className='border-t py-2 text-center text-[#dddd23] max-sm:text-xs font-bold px-2'>
                        <span >You Won ₹000</span>
                      </td>
                     </tr>
                     <tr>
                      <td className='text-center  max-sm:text-xs border-t  py-2 px-2'>
                        <span>#9</span>
                        
                      </td>
                      <td className='border-t py-2 text-center px-2 max-sm:text-xs '>
                        <span>User9</span>
                      </td>
                      <td className='border-t text-center py-2 text-sm max-sm:px-3 max-sm:text-xs align-middle '>
                        <span >User9@gmail.com</span>
                      </td>
                      <td className='border-t py-2 text-center px-2 max-sm:text-xs'>
                        <span>31m 25s</span>
                      </td>
                      <td className='border-t py-2 text-center px-2'>
                        <span className=' bg-gradient-to-tl bg-[#dddd23] py-1 px-2 rounded-md text-white font-semibold'>11</span>
                      </td>
                      <td className='border-t py-2 text-center text-[#dddd23] max-sm:text-xs font-bold px-2'>
                        <span >You Won ₹000</span>
                      </td>
                     </tr>
                     <tr className='border-y'>
                      <td className='text-center  max-sm:text-xs   py-2 px-2'>
                        <span>#10</span>
                        
                      </td>
                      <td className=' py-2 text-center max-sm:text-xs px-2 '>
                        <span>User9</span>
                      </td>
                      <td className=' text-center py-2 text-sm max-sm:px-3 max-sm:text-xs align-middle '>
                        <span >User9@gmail.com</span>
                      </td>
                      <td className=' py-2 text-center px-2 max-sm:text-xs'>
                        <span>31m 25s</span>
                      </td>
                      <td className=' py-2 text-center px-2'>
                        <span className=' bg-gradient-to-tl bg-[#dddd23] py-1 px-2 rounded-md text-white font-semibold'>11</span>
                      </td>
                      <td className=' py-2 text-center text-[#dddd23] max-sm:text-xs font-bold px-2'>
                        <span >You Won ₹000</span>
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
  )
}

export default Leaderboard
