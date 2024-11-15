import Header from "../layout/header";
import Nav from '../layout/nav';
import Map from "../Map/map";
import DriverInfor from "./driver";
import ContactButton from "./button";
import { CancelButton } from "./button";
import TripStatus from "./trip-status";

function TripTracking(props){
    return (
        <>
            <Header pageName='Trip Tracking'/>
           
           <div className='container'>
                <Map mapTitle=' ' />
                <DriverInfor/>
                <ContactButton/>
                <CancelButton/>

           </div>
            
            <TripStatus/>
            
        </>
    );
}


export default TripTracking;