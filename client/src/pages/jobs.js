import React, { useState } from 'react'
import CreateJob from '../components/createJob'
import JobList from '../components/jobList'

export default function Jobs() {

  const [refetchData, setRefetch] = useState()
  return (
        <>
      <div className="App flex justify-around mt-10 w-full flex-col  sm:flex-row">
        <CreateJob updateJobs= {setRefetch}></CreateJob>
        <JobList refetchData={refetchData}></JobList>
    </div>
   

 </>

  )
}
