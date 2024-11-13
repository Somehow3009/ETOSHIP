import './driver.css';
import Header from '../layout/header';
import Nav from '../layout/nav';
import JobCard from './job-card';
import jobData from './joblist.json';

function JobList(props){    
    const jobList = jobData.jobs;
  
    return (
        <div>
            <Header pageName='Job List'/>
            <div className='container'>
                {
                    jobList.map((job, index) => (
                        <JobCard
                            index={index} 
                            info={job} 
                        />
                    ))
                }
            </div>
            <Nav active='list'/>
        </div>
    );
}

export default JobList;