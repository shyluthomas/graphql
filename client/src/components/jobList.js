import React, { useEffect, useState } from 'react'
import {getJobs, deleteJob} from '../lib/graphql/queries';


export default function JobList() {

  const [data, setData] = useState();
  const [status, setStatus] = useState()
useEffect(() => {

  (async function getJobsdata () {
    const jobs = await getJobs();
    setData(jobs.jobs);
  })()


}, [])

useEffect(()=> {
  getJobs().then((data) => {
    setData(data.jobs);
  })
},[status])

const remove = async (id) => {
  const resp = await deleteJob(id)
  if(resp) {
    setStatus(`Job: ${resp?.deleteJob?.title} has been deleted..`)
  }
}
  return (
    <div className='flex flex-col border border-grey-400 m-4 sm:ml10 p-4 sm:p-4 sm:w-1/3 shadow-lg hover:shadow-sky-200'>
        <h3 className='text-sky-600 w-full'>List of Jobs</h3>
        <h4 className='text-green-600'> {status}</h4>
        <ul className='flex p-2 w-full flex-col overflow-y-auto justify-around'>
          {data && data.map((item, index) => 
                  <li className='text-left flex justify-between' key={item.id}><div>{item.title}</div> <button className='text-sky-600 justify-self-end' onClick={() => remove(item.id)}>Remove</button> </li>
            )}
         </ul>
    </div>
  )
}
