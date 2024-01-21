import React, { useEffect, useState } from 'react'
import {getJobs} from '../lib/graphql/queries';


export default function JobList() {

  const [data, setData] = useState();
useEffect(() => {

  (async function getJobsdata () {
    const jobs = await getJobs();
    setData(jobs.jobs);
  })()


}, [])


  return (
    <div className='flex flex-col border border-grey-400 m-4 sm:ml10 p-4 sm:p-4 sm:w-1/3 shadow-lg hover:shadow-sky-200'>
        <h3 className='text-sky-600 w-full'>List of Jobs</h3>
        <ul className='flex p-2 w-full flex-col justify-items-start overflow-y-auto'>
          {data && data.map((item, index) => 
                  <li className='text-left' key={item.id}>{item.title} </li>
            )}
         </ul>
    </div>
  )
}
