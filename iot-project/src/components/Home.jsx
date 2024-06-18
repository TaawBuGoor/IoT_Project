import Action from './Action'
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
                        <th scope="col">Id Key</th>
                        <th scope="col">Key User</th>
                        <th scope="col">Value</th>
                        <th scope="col">Algorithm</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Rawane</td>
                            <td>!gKlknpd@knz</td>
                            <td>MD5</td>
                            <td>
                                <Action />
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">2</th>
                            <td>Lamine</td>
                            <td>Kjkd?lkd§Rsa</td>
                            <td>SHA-256</td>
                            <td>
                                <Action />
                            </td>
                        </tr>

                        <tr>
                            <th scope='row'>3</th>
                            <td>Thiandoum</td>
                            <td>Hu%hsoypa@aj</td>
                            <td>SHA-512</td>
                            <td>
                                <Action />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Home