import React from 'react'
import { useQuery } from 'react-query';
import{Link} from  'react-router-dom';
import { getApiwithtoken } from '../../../utils/api';
import { formatDate, formatTime } from '../../../utils/userdata';
const Ongoingmatch = () => {

  const url = `${import.meta.env.VITE_URL}${import.meta.env.VITE_GET_GETONGOING_MATCH}`;
  const queryOngoingmatch = useQuery("Ongoingmatch", () => getApiwithtoken(url), {
    refetchOnWindowFocus: false,
    refetchInterval: 30000,    // 30 seconds
    enabled: !!url,
  });
  const data = queryOngoingmatch.data?.data?.data;
  console.log(data,"ongoing tournament");


  return (
    <div>
      <div className='w-full px-6 py-4 mx-auto'>
      <div className='flex flex-wrap -mx-3'>
          <div className='flex-none w-full max-w-full px-3 max-sm:px-1'>
          <div className=' flex flex-col  min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border'>
          <div className="p-4 pb-2 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                  <h6 className='font-bold text-[#16884d] text-xl'> Current Tournament</h6>
                </div>
                <div className='flex-auto pb-2 px-0 pt-2'>
                <div className='p-0 overflow-x-auto'>
                <table className='items-center w-full  mb-0 align-top border-gray-200 text-slate-500'>
                  <thead className='align-bottom'>
                    <tr>
                      <th className='text-left uppercase max-sm:text-xs border-t  py-3 pl-4'>Tournament Name
                      </th>
                      {/* <th className='text-left uppercase max-sm:text-xs border-t  py-3 pl-4'>Gender
                      </th> */}
                      {/* <th className='text-center uppercase max-sm:text-xs border-t  py-3 '>type
                      </th> */}
                      {/* <th className='text-center uppercase max-sm:text-xs border-t px-2 py-3 '>Vanue
                      </th> */}
                      <th className='text-left pl-4 lg:pl-16  uppercase align-middle px-2 max-sm:text-xs py- border-t'> Date
                      </th>
                      <th className='text-center uppercase max-sm:text-xs py-3 px-2 border-t'> Time
                      </th>
                      <th className='text-center uppercase max-sm:text-xs py-3 px-2 border-t'> Status
                      </th>
                      <th className='text-center uppercase max-sm:text-xs py-3 px-2 border-t'>Entry Fees
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                      {data?.map((item, index) => (
                        <tr key={index} className='border-y'>
                          <td className='text-left max-sm:text-xs pl-3 py-2 hover:text-[#16884d]'>
                            <Link to={`/admin/Roundlist/${item._id}`}>{item.tournamentName}</Link>
                          </td>
                          {/* <td className='border-t py-2 text-center px-2'>
      <span>Male</span>
    </td> */}
                          <td className='border-t text-left align-middle text-sm max-sm:text-xs py-2'>
                            <span>{formatDate(item.startDate)}, {formatTime(item.time)}</span>
                          </td>
                          {/* <td className='border-t py-2 text-center'>
      <span>India</span>
    </td> */}
                          {/* <td className='border-t text-left align-middle text-sm max-sm:text-xs py-2'>
                            <span>{formatDate(item.startDate)}, {formatTime(item.time)}</span>
                          </td> */}
                          <td className='border-t text-center py-2'>
                            <span>{item.gameTimeDuration/60}M</span>

                          </td>
                          <td className='border-t text-center py-2'>
                            <span>{item.status}</span>
                          </td>
                          <td className='border-t text-center py-2'>
                            <span>{item.entryFees}</span>
                          </td>
                        </tr>
                      ))}


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

export default Ongoingmatch

