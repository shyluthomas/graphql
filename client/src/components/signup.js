import React from 'react'
import { useForm } from 'react-hook-form'

export default function Signup() {
  
  const {
    register, 
    handleSubmit, 
    formState: {errors, isSubmitting},
   } = useForm();

   const onSubmit = (data) => {
    console.log(data)

   }

  return (
    <div className='flex flex-col border border-grey-400 p-4 m-4 sm:ml10 sm:w-1/3 shadow-lg hover:shadow-sky-200'>
      <h3 className='text-sky-600 w-full'>Create Account</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex p-4 w-full pb-4 flex-col justify-items-start '>
            <input
             {...register("name", {required: "name value required"}) }
            className='border-0 border-b-2 border-y-grey-200 w-full outline-none focus:placeholder-white ' placeholder='username' type='text'  ></input>
            {errors.name && <p className='text-sm text-red-500 text-left'> {errors.name.message} </p>}
        </div>
        <div className='flex p-4 w-full pb-4 flex-col justify-items-start'>
            <input 
             {...register("email", {required: "Email value required"}) }
            className='border-0 border-b-2 border-y-grey-200 w-full outline-none focus:placeholder-white' placeholder='Email' type='email' ></input>
             {errors.email && <p className='text-sm text-red-500 text-left'> {errors.email.message} </p>}
        </div>
        <div className='flex p-4 w-full pb-4 flex-col justify-items-start'>
            <input
             {...register("dob", {required: "dob value required"}) }
            className='border-0 border-b-2 border-y-grey-200 w-full outline-none focus:placeholder-white' placeholder='Date of birth' type='text' ></input>
           {errors.dob && <p className='text-sm text-red-500 text-left'> {errors.dob.message} </p>}
        </div>
        <div className='flex p-4 w-full pb-4 flex-col justify-items-start'>
            <input 
             {...register("sex", {required: "sex value required"}) }
            className='border-0 border-b-2 border-y-grey-200 w-full outline-none focus:placeholder-white' placeholder='text' type='sex'  ></input>
          {errors.sex && <p className='text-sm text-red-500 text-left'> {errors.sex.message} </p>}
        </div>
        <div className='flex p-4 w-full pb-4 flex-col justify-items-start'>
            <input 
             {...register("password", {required: "password value required"}) }
            className='border-0 border-b-2 border-y-grey-200 w-full outline-none focus:placeholder-white' placeholder='Password' type='password' ></input>
             {errors.password && <p className='text-sm text-red-500 text-left'> {errors.password.message} </p>}
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
