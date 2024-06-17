import '../styles/Content.css'
import { IoMdAdd } from "react-icons/io";

function Home() {
  return (
    <div className='home'>
        <div className='home-content'>
            <h1>Home Content</h1>

            <div className='add-key-btn'>
                <button className='add-btn'><IoMdAdd className='add-icon'/>Add a key</button>
            </div>

            <div className='table'>
                <table>
                    <thead>
                        <tr>
                            <th>Id Key</th>
                            <th>Key User</th>
                            <th>Value</th>
                            <th>Algorithm</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Rawane</td>
                            <td>!gKlknpd@knz</td>
                            <td>MD5</td>
                            <td>4</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Home