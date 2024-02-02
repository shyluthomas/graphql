
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { createJob } from '../lib/graphql/queries';
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

const schema = yup
  .object({
    title: yup.string().required(),
    description: yup.string().required(),
  })
  .required();


export default function CreateJob() {
const [status, setStatus] = useState('')
  const {
    register, 
    handleSubmit, 
    formState: {errors, isSubmitting},
    reset,
   } = useForm({
    resolver: yupResolver(schema)
   });

 

   const onSubmit = async (data) => {
    console.log(data)
    const response = await createJob({title: data.title, description: data.description});

    if(response) {
      setStatus('Job has been created..')
      reset();
    } else {
      setStatus('Job creation failed..')
    }


   }

 

  return (
    <div className='flex flex-col border border-grey-400 p-4 m-4 sm:ml10 sm:w-1/3 shadow-lg hover:shadow-sky-200'>
      <h3 className='text-sky-600 w-full'>Create Job</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className='text-green-600'>{status}</p>
        <div className='flex p-4 w-full pb-4 flex-col justify-items-start '>
            <input
             {...register("title") }
            className='border-0 border-b-2 border-y-grey-200 w-full outline-none focus:placeholder-white ' placeholder='title' type='text'  ></input>
            {errors.title && <p className='text-sm text-red-500 text-left'> {errors.title.message} </p>}
        </div>
        <div className='flex p-4 w-full pb-4 flex-col justify-items-start'>
            <input 
             {...register("description") }
            className='border-0 border-b-2 border-y-grey-200 w-full outline-none focus:placeholder-white' placeholder='Description' type='text' ></input>
             {errors.description && <p className='text-sm text-red-500 text-left'> {errors.description.message} </p>}
        </div>
       
      
        <div className='flex p-4 w-full pb-4'>
            <button type='submit' className='bg-sky-500 p-2 text-white  delay-75'>
              {isSubmitting ? "Loading.." : 'Signup' } 
            </button>
        </div>
        </form>

    </div>
  )
}
