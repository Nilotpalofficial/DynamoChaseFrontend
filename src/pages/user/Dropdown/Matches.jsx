import React from 'react'

const Matches = () => {
  return (
    <div>
      <div className='w-full px-6 py-6 mx-auto'>
      <div className='flex-none w-full max-w-full px-3'>
      <div className='flex flex-col  min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border'>
          <div className='p-4 pb-2 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent'>
             <div className='h-8 w-[102px] bg-slate-200  rounded-md'>
             <label className='ml-1 mb-2 '>Round:</label>
            <input type='number' className='h-8 w-10 text-center ml-1 float-end border-none rounded-md bg-green-700'></input>
             </div>
            </div>
               <div className='flex-auto pb-0 px-0 pt-2'>
                <div className=''>
                     <table className='items-center w-full  mb-0 align-top border-gray-200 text-slate-500'>
                         <thead>
                            <tr>
                                <th>#</th>
                                <th>White Pieces</th>
                                <th>Pts</th>
                                <th>Round 1</th>
                                <th>Pts</th>
                                <th>Black Pieces</th>
                                <th></th>
                            </tr>
                         </thead>
                     </table>
                </div>
               </div>
      </div>
    </div>

      </div>
    </div>
  )
}

export default Matches
