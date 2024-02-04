import React, { useState } from 'react'
import { useQuery } from '@apollo/client';
import {getJobsPageQuery, deleteJob} from '../lib/graphql/queries';

const limits = 8;
export default function JobListPage({refetchData}) {
  const [status, setStatus] = useState()
  const [current, setCurrent] = useState({count: 1,cursor: 0, limit: limits})
  const limit = current.limit;
  const {loading,error,data, refetch} =  useQuery(getJobsPageQuery,{
    variables: {
      limit,
      myCursor: current.cursor
    }
  });

const remove = async (id) => {
  const resp = await deleteJob(id)
  if(resp) {
    setStatus(`Job: ${resp?.deleteJob?.title} has been deleted..`)
    refetch();
  }
}

const next = (e) => {
  e.preventDefault();
  const myCursorNew = parseInt(data?.jobpages[limits-1]?.id, 10);
  setCurrent((prev) => { return {count: prev.count+1,cursor: myCursorNew, limit: limits} })
}
const prev = (e) => {
  e.preventDefault();
  const myCursorNew = parseInt(data?.jobpages[0]?.id, 10);
  setCurrent((prev) => { return {count: prev.count> 1 ? prev.count-1: 1,cursor: myCursorNew, limit: -limits} })
}

if(loading) {
  return 'loading..'
}

  return (
    <div className='flex w-full justify-center'>

        <div className='flex flex-col w-full  border border-grey-400 m-4 sm:ml10 p-4 sm:p-4  shadow-lg hover:shadow-sky-200'>
            <h3 className='text-sky-600 w-full'>List of Jobs In Paging</h3>
            <h4 className='text-green-600'> {status}</h4>
            {error && <h4 className='text-green-600'> {error}</h4>}
            <ul className='flex p-2 w-full flex-col overflow-y-auto justify-around'>
              {data && data?.jobpages?.map((item, index) => 
                      <li className='text-left flex justify-between' key={item.id}><div>{item.title}</div> <button className='text-sky-600 justify-self-end' onClick={() => remove(item.id)}>Remove</button> </li>
                )}
            </ul>
            <nav aria-label="Page navigation example">
              <ul className="inline-flex -space-x-px text-sm">
                <li>
                  <button disabled={current.count===1} type='button' onClick={(e) => prev(e)} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</button>
                </li>
                <li>
                  <button type='button' className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{current.count}</button>
                </li>
                <li>
                  <button disabled={data?.jobpages.length < limits} type='button' onClick={(e) => next(e)} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</button>
                </li>
              </ul>
            </nav>
        </div>
    </div>
  )
}
