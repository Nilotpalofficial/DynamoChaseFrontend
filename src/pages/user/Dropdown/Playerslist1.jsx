import React from 'react'
import Playerslist from '../../../components/Playerslist'
import { getApiwithtoken } from '../../../utils/api';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { formatDate, formatTime } from '../../../utils/userdata';
const Playerslist1 = () => {
  let { id } = useParams();
  const tournamentsuUrl = `${import.meta.env.VITE_URL}${import.meta.env.VITE_GET_MY_TOURNAMENT_BY_ID}${id}`;
  
  const queryGetTournamentById = useQuery("GetTournamentById", () => getApiwithtoken(tournamentsuUrl),);
  console.log(queryGetTournamentById?.data?.data?.data, "ffff");
  const tournament = queryGetTournamentById?.data?.data?.data;

  return (
    <div>
      <div className='w-full px-6 py-4 mx-auto'>

        {/* table      */}
        <div className='flex flex-wrap -mx-3'>

          <div className='flex-none w-full max-w-full px-3 max-sm:px-1'>

            <div className=' flex flex-col  min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border'>
              <div className="p-4 pb-2 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                <h6 className='font-bold text-[#16884d] text-2xl'>Players List</h6>
              </div>
              <div className='flex-auto px-0 py-2'>
                <div className='p-0 overflow-x-auto'>
                  <table className='items-center w-full  mb-0 align-top border-gray-200 text-slate-500'>
                    <thead className='align-bottom'>
                      <tr>
                        <th className='text-center uppercase text-sm max-sm:text-xs border-t  py-3 pl-4'>Sl no.
                        </th>
                        <th className='text-center uppercase text-sm max-sm:text-xs border-t px-2 py-3 '>Players Name
                        </th>
                        <th className='text-center text-sm max-sm:text-center  uppercase align-middle px-2 max-sm:text-xs py- border-t'> Mail id
                        </th>
                        <th className='text-center text-sm uppercase max-sm:text-xs py-3 px-2 border-t'> Rating
                        </th>
                        <th className='text-center text-sm uppercase max-sm:text-xs py-3 px-2 border-t'>Country
                        </th>
                        <th className='text-center text-sm uppercase max-sm:text-xs py-3 px-2 border-t'>Dynamo Coin
                        </th>
                        {/* <th className='text-center text-sm  uppercase max-sm:text-xs py-3 px-2 border-t'>Time
                        </th> */}
                        {/* <th className='text-center text-sm  uppercase max-sm:text-xs py-3 px-2 border-t'>City
                        </th>
                        <th className='text-center text-sm  uppercase max-sm:text-xs py-3 px-2 border-t'>Payment Amount
                        </th> */}

                      </tr>
                    </thead>
                    <tbody>
                      {
                        tournament?.JoinedPlayerList?.map((item, i) => (
                          <tr key={i}>
                            <td className='text-center  max-sm:text-xs border-t py-2 pl-3'>{i+1}</td>
                            <td className='border-t py-2 text-center px-2'>
                              <span>{item.userData.username}</span>
                            </td>
                            <td className='border-t text-center py-2 text-sm max-sm:px-3 max-sm:text-xs align-middle '>
                              <span >{item.userData.email}</span>
                            </td>
                            {/* <td className='border-t py-2 text-center px-2'>
                              <span>9876543210</span>
                            </td> */}
                            <td className='border-t py-2 text-center px-2'>
                              <span>{item.userData.rating}</span>
                            </td>
                            <td className="border-t py-2 px-4 text-center text-red-500"><img
                                            src={item?.userData?.countryIcon}  // Replace `countryIcon` with the actual image URL or import path
                                            alt="Country Icon"
                                            className="w-4 h-4 inline-block mr-2"
                                        /></td>
                            <td className='border-t py-2 text-center px-2'>
                              <span>{item?.userData?.dynamoCoin}</span>
                            </td>
                            {/* <td className='border-t py-2 text-center px-2'>
                              <span>{formatTime(item?.userData?.time)}</span>
                            </td> */}
                            {/* <td className='border-t py-2 text-center px-2'>
                              <span className='bg-gradient-to-tl from-green-600 to-lime-400 px-3 text-sm rounded-sm py-1 inline-block whitespace-nowrap text-center align-baseline font-normal  leading-none text-white'>
                                ₹100
                              </span>
                            </td> */}
                          </tr>
                        )
                        )
                      }
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

export default Playerslist1
