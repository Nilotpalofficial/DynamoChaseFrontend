import React, { useState } from 'react';
import { IoIosRocket } from "react-icons/io";
import { RiTimerLine } from "react-icons/ri";
import { AiFillThunderbolt } from "react-icons/ai";
import { getApi, postApiWithFormdata } from '../../../utils/api';
import { toastSuccess, toastWarn } from '../../../utils/notifyCustom';
import { z } from 'zod';
import { useQuery } from 'react-query';

const Timemanagement = () => {
  const initialFormState = { time1: "", time2: "", time3: "" };
  const [formData, setFormData] = useState({
    Bullet: initialFormState,
    Rapid: initialFormState,
    Blitz: initialFormState,
  });

  const HandleSaveData = async (e, title) => {
    e.preventDefault();
    const dataToSave = formData[title];
    const url = `${import.meta.env.VITE_URL}${import.meta.env.VITE_SETTIME}`;
    try {
      const res = await postApiWithFormdata(url, { ...dataToSave, title });
      if (res.data.success) {
        toastSuccess("Saved Successfully");
        setFormData(prevState => ({
          ...prevState,
          [title]: initialFormState,
        }));
      } else {
        toastSuccess(res.data.message);
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        toastWarn(error.errors[0].message);
      }
    }
  };

  const handleChange = (e, title) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [title]: {
        ...prevState[title],
        [name]: value,
      },
    }));
  };

  const url = `${import.meta.env.VITE_URL}${import.meta.env.VITE_GETTIME}`;
  const { data, error, isLoading } = useQuery('allTimes', () => getApi(url));

  const renderForm = (title, Icon) => (
    <div className='w-full mt-6 pl-1 xl:w-4/12'>
      <div className='relative flex flex-col p-2 h-full min-w-0 break-words bg-white border-0 shadow-xl rounded-md bg-clip-border'>
        <div className="flex justify-between rounded-md bg-gray-300">
          <h6 className="mb-0 p-2 text-xl flex font-semibold">
            <Icon className='text-gray-700 mt-1 text-xl' /> {title}
          </h6>
          <button type='button' onClick={(e) => HandleSaveData(e, title)} className='px-2 my-2 mr-2 text-lg text-semibold bg-green-600 rounded-md text-white font-semibold'>Save</button>
        </div>
        <div className='flex w-full'>
          {["time1", "time2", "time3"].map((time, index) => (
            <div className='mt-3 w-1/3 ml-4 first:ml-0' key={index}>
              <input
                type='text'
                name={time}
                value={formData[title][time]}
                onChange={(e) => handleChange(e, title)}
                className='h-8 w-12 border-2 border-gray-700 rounded-l-md pl-1'
              />
              <label className='bg-gray-700 px-2 py-1 text-lg font-semibold rounded-r-md text-green-600'>Min</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className='ms-60 max-sm:ms-0 pb-4'>
      <div className='w-full'>
        <div className='mx-3 bg-white rounded-md'>
          <div className='text-center shadow-lg rounded-md mt-4 mb-1 py-4'>
            <h1 className='font-bold text-2xl text-[#16884d]'>Set Game Time</h1>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <div className='flex flex-wrap mx-3'>
          {renderForm('Bullet', IoIosRocket)}
          {renderForm('Rapid', RiTimerLine)}
          {renderForm('Blitz', AiFillThunderbolt)}
        </div>
      </div>
    </div>
  );
};

export default Timemanagement;
