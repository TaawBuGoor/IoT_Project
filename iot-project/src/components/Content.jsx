import '../styles/Content.css'
import { FiSearch } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import Home from './Home'

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

        
        <Home />
    </div>
  )
}

export default Content