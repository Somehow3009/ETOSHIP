
import Map from "../../../components/Map/map";
import DriverInfor from "./driver";
import ContactButton from "./button";
import { CancelButton } from "./button";


function TripTracking(props){
    return (
        <>
           
                <Map mapTitle=' ' />
                <DriverInfor/>
                <ContactButton/>
                <CancelButton/>

            
            
        </>
    );
}


export default TripTracking;