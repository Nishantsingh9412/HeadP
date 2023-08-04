import { MdClose } from "react-icons/md";
import "./Search.scss";
const Search = ({setShowSearch}) => {
    return (<div className="search-modal"> 
              <div className="form-field">
                <input type="text" autoFocus placeholder="Search for Products"/>
                    <MdClose onClick={() => setShowSearch(false)  }/>
              </div>
                <div className="search-result-content">
                    <div className="search-results">
                         <div className="search-result-item"> </div>
                    </div>
                </div>
            </div>
            );
};

export default Search;
