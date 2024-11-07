import './job-list.css'
import Header from "../layout/header";
import Nav from '../layout/nav';

import JobCard from "./job-card";

function JobList(props){

    const jobList = [
        {
            custormer: "Mr. Khang",
            address: "123 Hoa Binh St",
            time: "10:30 AM",
            accept: true
        },
        {
            custormer: "Mr. Minh",
            address: "123 Hoa Binh St", 
            time: "11:45 AM",
            accept: false
        },
        {
            custormer: "Ms. Ngoc",
            address: "123 Hoa Binh St",
            time: "3:30 PM",
            accept: false
        },
        {
            custormer: "Mr. Thanh",
            address: "123 Hoa Birth St",
            time: "90:30 AM",
            accept: false
        }
    ];
      
    return (
        <div>
            <Header pageName='Job List'/>
            <div className='container'>
                {
                    jobList.map((job, index) => (
                        <JobCard index={index} info={job} />
                    ))
                }
            </div>
            <Nav active='list'/>
        </div>
    );
}

export default JobList;