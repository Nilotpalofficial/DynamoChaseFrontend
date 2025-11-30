import React from 'react'
import{Link} from  'react-router-dom';
const Playerslist = () => {
  return (
    <div>
      <div className='w-full '>
        <div className=' rounded-2xl shadow-lg bg-white'>
          <div className='mb-1 py-4 flex justify-between'>
            <h1 className=' font-bold text-2xl max-sm:text-xl uppercase text-[#16884d] pl-3'>Players List:</h1>
            <div className='gap-2 pr-3 mt-1 text-md max-sm:text-xs max-sm:gap-0 max-sm:pr-1'>
            <Link to='/playerslist1' className='uppercase   font-semibold bg-gradient-to-tl bg-[#16884d] text-white p-2 rounded-md m-2 max-sm:m-1 '>
            Above 19
            </Link>
            <Link to='/playerslist1' className='uppercase  font-semibold bg-gradient-to-tl bg-[#16884d] text-white p-2 rounded-md m-2 '>
            under 19
            </Link>
            <Link to='/playerslist1' className='uppercase  font-semibold bg-gradient-to-tl bg-[#16884d] text-white p-2 rounded-md m-2 '>
            under 13
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Playerslist
