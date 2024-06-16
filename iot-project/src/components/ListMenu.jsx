import { HiOutlineLogout } from "react-icons/hi";
import { HiHome } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import { IoStatsChart } from "react-icons/io5";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";

function ListMenu() {
  return (
    <div className="menu">
      <div className='logo'>
        <TbLayoutSidebarLeftCollapse className='hide-icon' />
      </div>

      <div className='menu-list'>
        <a href='/Home' className='item active'>
          <HiHome className='icons'/>
          <span>Home</span>
        </a>

        <a href='/Keys Management' className='item'>
          <MdOutlineManageAccounts className='icons'/>
          <span>Keys Management</span>
        </a>

        <a href='/Statistics' className='item'>
          <IoStatsChart className='icons'/>
          <span>Statistics</span>
        </a>

        <a href='/Users' className='item'>
          <LuUser className='icons'/>
          <span>Users</span>
        </a>
        
        {/* <div className="bottom"> */}
          <a href='/Settings' className='item'>
            <IoSettingsOutline className='icons'/>
            <span>Settings</span>
          </a>

          <a href='/#' className='item'>
            <HiOutlineLogout className='icons'/>
            <span>LogOut</span>
          </a>
        {/* </div> */}
      </div>
    </div>
  )
}

export default ListMenu