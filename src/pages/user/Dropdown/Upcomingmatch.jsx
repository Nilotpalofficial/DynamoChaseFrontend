import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';
import { formatDate, formatTime } from '../../../utils/userdata';
import CountdownTimer from '../../../components/Countdowntimer';
import { MdCancel } from "react-icons/md";
import { minutesToSeconds } from '../../../utils/joditCnf';
import { postApiWithToken } from '../../../utils/api';
import { toastSuccess } from '../../../utils/notifyCustom';
const Upcomingmatch = ({ data }) => {
  // State for managing modal visibility and form data
  const [isModalOpen, setModalOpen] = useState(false);
  const [TimeDuration, setTimeDuration] = useState();
  const [editId, seteditId] = useState("");
  const [editItem, seteditItem] = useState()
  let duration = minutesToSeconds(TimeDuration)
  const handleEdit = (item) => {
    console.log(item,"ggggggggggggggggggg");
    seteditItem(item)
    seteditId(item._id)
    setModalOpen(true)
  }
  const [formData, setFormData] = useState({
    tournamentName: "",
    startDate: "",
    entryFees: "",
    time: "",
    noOfplayers: "",
    gameTimeDuration: "",
    delayTime: ""
  });

  useEffect(() => {
    if (editItem) {
      setFormData({
        tournamentName: editItem.tournamentName || "",
        startDate: editItem.startDate || "",
        entryFees: editItem.entryFees || "",
        time: editItem.time || "",
        noOfplayers: editItem.noOfplayers || "",
        gameTimeDuration: editItem.gameTimeDuration ? editItem.gameTimeDuration / 60 : "", // Convert to minutes
        delayTime: editItem.delayTime || ""
      });
      setTimeDuration(editItem.gameTimeDuration ? editItem.gameTimeDuration / 60 : 10); // Convert to minutes with default of 10
    }
  }, [editItem]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const duration = minutesToSeconds(TimeDuration);
    setFormData((prevData) => ({
      ...prevData,
      gameTimeDuration: duration || ""
    }));
  }, [TimeDuration]); // Only re-run the effect if TimeDuration changes

  const handleSaveData = async(e) => {
    const url = `${import.meta.env.VITE_URL}${import.meta.env.VITE_SET_TOURNAMENTUPDATE}${editId}`
    e.preventDefault();
    try {
      const result = await postApiWithToken(url, formData)
      console.log(result.data);

      if (result.data.success) {
        toastSuccess("Saved Successfully");
        setFormData({
          tournamentName: "",
          startDate: "",
          entryFees: "",
          time: "",
          // noOfplayers: "",
          gameTimeDuration: "",
          delayTime:""
        });
        setTimeDuration("")
        setModalOpen(false);
        seteditId("")
      } else {
        toastWarn(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      toastWarn('An error occurred while saving data.');
    }
   
  };

  return (
    <div>
      <div className='w-full px-6 py-4 mx-auto'>
        <div className='flex flex-wrap -mx-3'>
          <div className='flex-none w-full max-w-full px-3 max-sm:px-1'>
            <div className='flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border'>
              <div className="p-4 pb-2 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                <h6 className='font-bold text-[#16884d] text-xl'>Today Matches</h6>
              </div>
              <div className='flex-auto py-2 px-0'>
                <div className='p-0 overflow-x-auto'>
                  <table className='items-center w-full mb-0 align-top border-gray-200 text-slate-500'>
                    <thead className='align-bottom'>
                      <tr>
                        <th className='text-left uppercase max-sm:text-xs border-t py-3 pl-4'>Tournament Name</th>
                        <th className='text-left pl-4 lg:pl-16 uppercase align-middle px-2 max-sm:text-xs py- border-t'> Date/time</th>
                        <th className='text-center uppercase max-sm:text-xs py-3 px-2 border-t'> Timer</th>
                        <th className='text-center uppercase max-sm:text-xs py-3 px-2 border-t'>Entry Fees</th>
                        <th className='text-center uppercase max-sm:text-xs border-t py-3'>Edit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.map((item, index) => (
                        <tr key={index} className='border-y'>
                          <td className='text-left max-sm:text-xs pl-3 py-2 hover:text-[#16884d]'>
                            <Link to={`/admin/playerslist/${item._id}`}>{item.tournamentName}</Link>
                          </td>
                          <td className='border-t text-left align-middle text-sm max-sm:text-xs py-2'>
                            <span>{formatDate(item.startDate)}, {formatTime(item.time)}</span>
                          </td>
                          <td className='border-t text-center py-2'>
                            {item.status === "pending" ? <CountdownTimer data={item.time} /> : ""}
                          </td>
                          <td className='border-t text-center py-2'>
                            <span>{item.entryFees}</span>
                          </td>
                          <td className='border-t py-2 text-center px-2'>
                            <span
                              onClick={()=>handleEdit(item)}
                              className='bg-gradient-to-tl from-green-600 to-lime-400 rounded-sm p-1 inline-block whitespace-nowrap text-center align-baseline font-semibold leading-none text-white cursor-pointer'>
                              <FiEdit />
                            </span>
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

      {/* Modal */}
      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg'>
            <div className=' flex justify-end'>
              <button onClick={() => setModalOpen(false)} className='text-2xl text-[#16884d] '><MdCancel /></button>
            </div>
            <form className='mx-4 items-center'>
              <div className='w-full'>

                <label className='text-2xl font-normal opacity-75'>Tournament Name:</label>
                <input
                  name="tournamentName"
                  value={formData.tournamentName}
                  onChange={handleChange}
                  type='text'
                  placeholder='type here'
                  className='w-full h-[36px] opacity-75 mt-2 ml- pl-3 rounded-md border-solid border-[1px] border-green-900 focus:outline-none focus:border-[#16884d] focus:border-2' />
              </div>
              <div className='flex justify-between max-sm:flex-col'>
                <div className='w-full pl-1 max-sm:pl-0'>
                  <label className='text-2xl opacity-75'>Time</label>
                  <input
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    type='time'
                    id='appt'
                    className='ml- w-full pl-1 h-[34px] mt-2 opacity-75 rounded-md border-solid border-[1px] border-green-900 focus:outline-none focus:border-[#16884d] focus:border-2' />
                </div>
                <div className='w-full pl-1 max-sm:pl-0'>
                  <label className='text-2xl opacity-75'>Duration</label>
                  <input
                      name="Duration"
                      placeholder='Add Minute'
                      value={TimeDuration} // Default value to 10 minutes if formData.time is not set
                      onChange={(e)=>setTimeDuration(e.target.value)}
                      type='number'
                      id='appt'
                      className='ml- w-full pl-1 h-[34px] mt-2 opacity-75 rounded-md border-solid border-[1px] border-green-900 focus:outline-none focus:border-[#16884d] focus:border-2'
                    />
                </div>
                <div className='w-full pl-1 max-sm:pl-0'>
                  <label className='text-2xl opacity-75'>Delay</label>
                  <input
                    name="delayTime"
                    placeholder='Add Minute'
                    value={formData.delayTime}
                    onChange={handleChange}
                    type='number'
                    id='appt'
                    className='ml- w-full pl-1 h-[34px] mt-2 opacity-75 rounded-md border-solid border-[1px] border-green-900 focus:outline-none focus:border-[#16884d] focus:border-2' />
                </div>
              </div>
              <div className='flex pt-4 justify-between max-sm:flex-col'>
                <div className='w-full'>
                  <label className='text-2xl pl- opacity-75'>Starting Date:</label>
                  <input
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    type='date'
                    className='w-full pl-2 h-[34px] mt-2 opacity-75 rounded-md border-solid border-[1px] border-green-900 focus:outline-none focus:border-[#16884d] focus:border-2' />
                </div>
              </div>
              <div className='mt-2 flex justify-between'>
                <div className='w-full'>
                  <label className='text-2xl pl- opacity-75'>Entry Fees:</label>
                  <input
                    name="entryFees"
                    value={formData.entryFees}
                    onChange={handleChange}
                    type='text'
                    className=' h-[34px] ml- w-full mt-2 pl-2 opacity-75 rounded-md border-solid border-[1px] border-green-900 focus:outline-none focus:border-[#16884d] focus:border-2' />
                </div>
              </div>
              <input type='checkbox' className='mt-3'></input>
              <label className='pl-2'>Remember Me</label>
              <button
                onClick={(e)=>handleSaveData(e)}
                type='button'
                className='inline-block w-full h-[34px] mt-4 mb-0 font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer shadow-md bg-x-25 bg-150 leading-pro text-xs ease-in tracking-tight-soft bg-gradient-to-tl bg-[#16884d] hover:scale-102 hover:shadow-xs active:opacity-85'>
                Save
              </button>

            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Upcomingmatch;
