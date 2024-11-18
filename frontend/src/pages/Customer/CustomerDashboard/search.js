import { IoMdSearch } from "react-icons/io";

function Search(props) {
    return (

        <div className="search-container card">
            <div className="search-wrapper">
                <IoMdSearch className='search-icon'/>
                <input type="text" className="search-input" placeholder="Search order..." />
            </div>
        </div>
    );
};

export default Search;
  