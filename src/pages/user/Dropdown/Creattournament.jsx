import React, { useEffect, useState } from 'react'

import banner1 from '../../../assets/Banner1.jpg'
import Chesspoint from '../../../assets/Chesspoint.jpg'
import { toastSuccess, toastWarn } from '../../../utils/notifyCustom';
import { postApiWithFormdataToken, postApiWithFormdataTokenUseFetch, postApiWithFormdataTokenuseRow, postApiWithToken } from '../../../utils/api';
import { minutesToSeconds } from '../../../utils/joditCnf';

const Creatmatch = () => {

  const [TimeDuration, setTimeDuration] = useState();
  const [loading,setLoading]=useState(false);
  let duration=minutesToSeconds(TimeDuration)

  const [formData, setFormData] = useState({
    tournamentName: "",
    startDate: "",
    entryFees: "",
    time: "",
    noOfplayers: "",
    gameTimeDuration: "",
    delayTime:""
  });

  useEffect(() => {
    const duration = minutesToSeconds(TimeDuration);
    setFormData((prevData) => ({
      ...prevData,
      gameTimeDuration: duration || ""
    }));
  }, [TimeDuration]); // Only re-run the effect if TimeDuration changes

  console.log(formData,"ggggggggg");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };


  const handleSaveData = async (e) => {
    const url = `${import.meta.env.VITE_URL}${import.meta.env.VITE_SET_TOURNAMENT}`
    e.preventDefault();
    try {
      setLoading(true)
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
      } else {
        toastWarn(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      toastWarn('An error occurred while saving data.');
    }
    finally{
      setLoading(false)
    }
  };


  return (
    <div className='ms-60 max-sm:ms-0 pb-8'>
      {/* banner */}
      <div className='w-full my-4 h-44 mt-3 mb-1  '  >
        <div className='my-mb-1 h-44 mx-3 rounded-sm' style={{ background: `url(${banner1}) center/cover` }}>
          <h3 className=' float-end text-white max-sm:text-lg  text-2xl pr-6 pt-4 font-medium'>Dynamo Unicorn Chess</h3>
        </div>
      </div>
      {/* end banner */}
      <div className='w-full '>
        <div className=' mx-3 bg-white'>
          <div className='text-center shadow-lg mt-2 mb-1 py-4 '>
            <h1 className=' font-bold text-2xl text-[#16884d]'>Create a New Tournament</h1>
          </div>
        </div>
      </div>
      {/* form section */}
      <div className='w-full'>
        <div className=' mx-3 bg-white py-4 max-sm:px-2'>
          <div>
            <div className=' p-6  max-sm:p-2  max-sm:mx-0 lg:mx-44 max-sm:w-full  rounded-md bg-gray-200'>
              <form className='mx-4  items-center '>
                <div className='w-full'>
                  <label className='text-2xl  font-normal opacity-75'>Tournament Name:</label>
                  <input name="tournamentName"
                    value={formData.tournamentName}
                    onChange={handleChange} type='text' placeholder='type here' className='w-full h-[36px] opacity-75 mt-2 ml- pl-3 rounded-md border-solid border-[1px] border-green-900 focus:outline-none focus:border-[#16884d] focus:border-2' ></input>
                </div>

                {/* <div className='flex py-4 w-full opacity-75'>
                  <label className='text-xl max-sm:text-sm font-normal'>Gender:</label>
                  <p className='text-xl px-1 max-sm:text-sm '>
                    <input
                      name="gender"
                      value="Male"
                      checked={formData.gender === "Male"}
                      onChange={handleChange}
                      type='radio'
                      className='mx-1'
                    /> Male
                  </p>
                  <p className='text-xl px-1 max-sm:text-sm '>
                    <input
                      name="gender"
                      value="Female"
                      checked={formData.gender === "Female"}
                      onChange={handleChange}
                      type='radio'
                      className='mx-1'
                    /> Female
                  </p>
                  <p className='text-xl px-1 max-sm:text-sm '>
                    <input
                      name="gender"
                      value="Others"
                      checked={formData.gender === "Others"}
                      onChange={handleChange}
                      type='radio'
                      className='mx-1'
                    /> Others
                  </p>
                </div> */}
                <div className='flex justify-between max-sm:flex-col '>
                  {/* <div className='w-full'>
                    <label className='text-2xl pl- opacity-75'>Players</label>
                    <input name="noOfplayers"
                      value={formData.noOfplayers}
                        placeholder='Number of players'
                      onChange={handleChange} type='text' className='w-full ml- pl-1 mt-2 h-[34px] opacity-75 rounded-md border-solid border-[1px] border-green-900 focus:outline-none focus:border-[#16884d] focus:border-2'></input>
                  </div> */}
                  <div className='w-full pl-1 max-sm:pl-0'>
                    <label className='text-2xl opacity-75'>Time</label>
                    <input name="time"
                      value={formData.time}
                    
                      onChange={handleChange} type='time' id='appt' className=' ml- w-full pl-1 h-[34px] mt-2 opacity-75 rounded-md border-solid border-[1px] border-green-900 focus:outline-none focus:border-[#16884d] focus:border-2'></input>
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
                      value={formData.delayTime} // Default value to 10 minutes if formData.time is not set
                      onChange={handleChange}
                      type='number'
                      id='appt'
                      className='ml- w-full pl-1 h-[34px] mt-2 opacity-75 rounded-md border-solid border-[1px] border-green-900 focus:outline-none focus:border-[#16884d] focus:border-2'
                    />
                  </div>

                </div>
                <div className='flex pt-4 justify-between max-sm:flex-col'>
                  <div className='w-full'>
                    <label className='text-2xl pl- opacity-75'>Starting Date:</label>
                    <input name="startDate"
                      value={formData.startDate}
                      onChange={handleChange} type='date' className='w-full  pl-2 h-[34px] mt-2 opacity-75 rounded-md border-solid border-[1px] border-green-900 focus:outline-none focus:border-[#16884d] focus:border-2'></input>
                  </div>
                  {/* <div className='w-full pl-4 max-sm:pl-0'>
                    <label className='text-2xl pl- opacity-75'>End Date:</label>
                    <input name="endDate"
                      value={formData.endDate}
                      onChange={handleChange} type='date' className=' ml- w-full pl-2 h-[34px] mt-2 opacity-75 rounded-md border-solid border-[1px] border-green-900 focus:outline-none focus:border-[#16884d] focus:border-2'></input>
                  </div> */}
                </div>
                <div className='mt-2 flex justify-between'>
                  <div className='w-full'>
                    <label className=' text-2xl pl- opacity-75'>Entry Fees:</label>
                    <input name="entryFees"
                      value={formData.entryFees}
                      onChange={handleChange} type='amount' className='w- h-[34px] ml- w-full mt-2 pl-2 opacity-75 rounded-md border-solid border-[1px] border-green-900 focus:outline-none focus:border-[#16884d] focus:border-2'></input>
                  </div>
                  {/* <div className='w-full pl-4 max-sm:pl-1'>
                    <label className='text-2xl opacity-75'>Type:</label>
                    <select name="type"
                      value={formData.type}
                      onChange={handleChange} className='w-full pl-2 h-[34px] mt-2 opacity-75 text-normal rounded-md border-solid border-[1px] border-green-900 focus:outline-none focus:border-[#16884d] focus:border-2'>
                      <option ></option>
                      <option>Under 13</option>
                      <option>Under 19</option>
                      <option>Adult</option>
                    </select>
                  </div> */}
                </div>
                <input type='checkbox' className=' mt-3'></input>
                <label className='pl-2'>Remember Me</label>
                <button onClick={handleSaveData} disabled={loading} type='button' className='inline-block w-full h-[34px] mt-4 mb-0 font-bold text-center text-white uppercase align-middle transition-all  border-0 rounded-lg cursor-pointer shadow-md bg-x-25 bg-150 leading-pro text-xs ease-in tracking-tight-soft bg-gradient-to-tl bg-[#16884d] hover:scale-102 hover:shadow-xs active:opacity-85'>
                  {loading?"loading...":"Create Now"}
                </button>



              </form>
            </div>

          </div>


        </div>
      </div>
    </div>
  )
}

export default Creatmatch
