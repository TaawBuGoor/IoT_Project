import { Layout } from 'antd';
import '../styles/Navbar.css'
import ListMenu from './ListMenu';
import { useState } from 'react';

const {Header, Sider} = Layout;
function Navbar(){
    return(
        <Layout className='navbar'>
            <Sider>
                <ListMenu />
            </Sider>
        </Layout>  
    )
}

export default Navbar;