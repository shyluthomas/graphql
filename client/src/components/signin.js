import React from 'react'

export default function Signin() {
  return (
    <div className='flex flex-col border border-grey-400 m-4 sm:ml10 p-4 sm:p-4 sm:w-1/3 shadow-lg hover:shadow-sky-200'>
        <h3 className='text-sky-600 w-full'>Signin</h3>
        <div className='flex p-4 w-full pb-10'>
            <input className='border-0 border-b-2 border-y-grey-200 w-full outline-none focus:placeholder-white' placeholder='username' type='text' value="" ></input>
        </div>
        <div className='flex p-4 w-full'>
            <input className='border-0 border-b-2 border-y-grey-200 w-full outline-none  focus:placeholder-white' placeholder='password' type='password' value="" ></input>
        </div>
        <div className='flex p-4 w-full justify-between'>
            <p className=' text-sky-600'> If you have account please, use it</p>
            <button className='bg-sky-500 p-2 '>Signin</button>
        </div>

    </div>
  )
}
