import './driver.css';
import JobCard from '../../components/Card/job-item-card';
import jobData from './joblist.json';

function JobList(props){    
    const jobList = jobData.jobs;
  
    return (
        <>
            {
                jobList.map((job, index) => (
                    <JobCard
                        key={index}
                        index={index} 
                        info={job} 
                    />
                ))
            }
        </>
    );
}

export default JobList;