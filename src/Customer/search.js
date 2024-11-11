import './search.css'
import { CiSearch } from "react-icons/ci";

function Search(props) {
    return (
        <div className='search-card'>
            <div className="search-container">
            <span className="search-icon"><CiSearch /> </span>
            <input
                type="text"
                placeholder="Search for pickup and dropoff"
                className="search-input"
            />
            </div>
        </div>
    );
};

export default Search;
  