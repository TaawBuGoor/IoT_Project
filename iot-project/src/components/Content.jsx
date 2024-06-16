import '../styles/Content.css'
import { FiSearch } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

function Content() {
  return (
    <div className='content'>
        <div className='headline'>
            <h1>Home</h1>
            <div className='search-box'>
                <input type='text' placeholder='Search anything here' />
                <FiSearch className='search-icon'/>
            </div>
            <FaUserCircle className='user-icon'/>
        </div>
    </div>
  )
}

export default Content