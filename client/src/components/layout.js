import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout({children}) {
  return (

    <>
        <header className='border-b-2 border-neutral-300'>
            <nav className='bg-white flex'>
                <div className='bg-zinc-600 max-w-screen-xl flex flex-wrap items-center mx-auto p-4 ml-4 mt-4 mb-4'>
                    <p className='animate-bounce'>Logo</p>
                </div>
                <ul className='w-full p-4 mt-4 flex maright-l-auto space-x-5 justify-end'>
                    <li>
                        <a className='block p-3 text-white rounded border border-gray-50 backdrop-blur-sm bg-black hover:animate-pulse' href='#'> Home</a>
                    </li>
                    <li> 
                        <a className='block p-3 text-white rounded border border-gray-50 backdrop-blur-sm bg-black hover:animate-pulse' href='#'>About</a>
                    </li>
                    <li>
                        <a className='block p-3 text-white rounded border border-gray-50 backdrop-blur-sm bg-black hover:animate-pulse' href='#'>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
           <Outlet>{children}</Outlet> 
        </main>
        <footer className='fixed bottom-0 flex w-11/12 border border-x-indigo-50 rounded justify-between ml-16'>
            <div className='text-cyan-700 align-middle mt-2 pl-4'>
                <p>
                © 2023 Flowbite™. All Rights Reserved.
                </p>
            </div>

                <ul className='flex maright-l-auto mr-6'>
                    <li className='ml-2 text-cyan-700 p-2 hover:text-fuchsia-600'>About</li>
                    <li className='ml-2 text-cyan-700 p-2 hover:text-fuchsia-600'>Privacy Policy</li>
                    <li className='ml-2 text-cyan-700 p-2 hover:text-fuchsia-600'>Licence</li>
                    <li className='ml-2 text-cyan-700 p-2 hover:text-fuchsia-600'>Contact</li>
                </ul>

        </footer>
    
    </>
  )
}
