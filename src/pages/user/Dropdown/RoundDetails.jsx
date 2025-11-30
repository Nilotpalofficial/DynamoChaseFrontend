import React from 'react'
import Playerslist from '../../../components/Playerslist'
import { getApiwithtoken } from '../../../utils/api';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { formatDate, formatTime } from '../../../utils/userdata';
const RoundDetails = () => {
    let { id, no } = useParams();
    console.log(id);

    const roundUrl = `${import.meta.env.VITE_URL}${import.meta.env.VITE_GET_BOARD_DATA_ROUND_NO}${id}/${no}`;

    console.log(roundUrl, "ffff", id);


    const queryGetTournamentById = useQuery("GetgetOngoingmatchData", () => getApiwithtoken(roundUrl),);
    const tournament = queryGetTournamentById?.data?.data?.data;
    console.log(queryGetTournamentById?.data?.data?.data, "ffff=======+++++");

    return (
        <div>
            <div className='w-full px-6 py-4 mx-auto'>

                {/* table      */}
                <div className='flex flex-wrap -mx-3'>

                    <div className='flex-none w-full max-w-full px-3 max-sm:px-1'>

                        <div className=' flex flex-col  min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border'>
                            <div className=" p-4 pb-2 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent flex ">
                                <h6 className='font-bold text-[#16884d] text-2xl'>Round Details
                                </h6>

                            </div>
                            <div className='flex-auto px-0 py-2'>
                                <div className='p-0 overflow-x-auto'>

                                    <table className='items-center w-full  mb-0 align-top border-gray-200 text-slate-500'>
                                        <thead className='align-bottom'>
                                            <tr>
                                                <th className='text-center uppercase text-sm max-sm:text-xs border-t  py-3 pl-4'>Sl no.
                                                </th>
                                                <th className='text-center uppercase text-sm max-sm:text-xs border-t px-2 py-3 '>Username
                                                </th>
                                                <th className='text-center uppercase text-sm max-sm:text-xs border-t px-2 py-3 '>Score
                                                </th>
                                                {/* <th className='text-center uppercase text-sm max-sm:text-xs border-t px-2 py-3 '>Username
                                                </th> */}

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                Array.isArray(tournament) &&
                                                tournament
                                                    ?.sort((a, b) => b.roundScore.score - a.roundScore.score) // Sorting by roundScore in descending order
                                                    .map((item, i) => (
                                                        <tr key={i}>
                                                            <td className="text-center max-sm:text-xs border-t py-2 pl-3">{i + 1}</td>
                                                            <td className="border-t py-2 text-center px-2">
                                                                <span>{item?.userData?.name}</span> {/* Display the user name */}
                                                            </td>
                                                            <td className="border-t py-2 text-center px-2">
                                                                <span>{item?.roundScore?.score}</span> {/* Display the score */}
                                                            </td>
                                                            {/* Uncomment and add more columns as needed */}
                                                            {/* <td className='border-t py-2 text-center px-2'>
            <span>{item?.buchholz}</span> 
        </td> */}
                                                        </tr>
                                                    ))
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

export default RoundDetails
