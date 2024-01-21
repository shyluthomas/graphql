import React from 'react'
import CreateJob from '../components/createJob'
import JobList from '../components/jobList'

export default function Jobs() {
  return (
   
    <div className="App flex justify-around mt-10 w-full flex-col  sm:flex-row">
        <CreateJob></CreateJob>
        <JobList></JobList>
    
    </div>


  )
}
