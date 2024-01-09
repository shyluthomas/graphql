import './App.css';
import {useEffect, useState} from 'react'

import {getJobs} from './lib/graphql/queries';

function App() {


const [data, setData] = useState();
useEffect(() => {

  (async function getJobsdata () {
    const jobs = await getJobs();
    // const jobs = await getJob(1);
    setData(jobs.jobs);
  })()


}, [])




  return (
    <div className="App">
      <header className="App-header">
        <p>
         
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn GraphQL : Open the console to see the magic 

          {data && data.map((item, index) => 
            <li key={index}>{item.title} </li>
          )}
        </a>
      </header>
    </div>
  );
}

export default App;
